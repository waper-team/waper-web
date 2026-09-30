import { By, until, WebDriver, WebElement } from 'selenium-webdriver';

/**
 * Opciones de configuración para el helper visual
 */
export interface VisualHelperOptions {
    /** Tiempo de espera (ms) antes de presionar un botón para que el usuario pueda observarlo */
    highlightDurationMs?: number;
    /** Tiempo de espera (ms) después de una acción */
    postActionDelayMs?: number;
    /** Velocidad de tipeo simulado (ms por carácter) */
    typingDelayMs?: number;
}

/**
 * Helper para interactuar con elementos mediante data-testid
 * con retroalimentación visual directa en el navegador (resaltado, HUD, etc.)
 */
export class VisualHelper {
    private driver: WebDriver;
    private highlightDurationMs: number;
    private postActionDelayMs: number;
    private typingDelayMs: number;

    constructor(driver: WebDriver, options: VisualHelperOptions = {}) {
        this.driver = driver;
        this.highlightDurationMs = options.highlightDurationMs ?? 800;
        this.postActionDelayMs = options.postActionDelayMs ?? 500;
        this.typingDelayMs = options.typingDelayMs ?? 40;
    }

    /**
     * Pausa asíncrona
     */
    async sleep(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    /**
     * Inyecta o actualiza una barra HUD en la parte superior del navegador
     * que indica qué acción se está realizando en tiempo real
     */
    async showBanner(message: string, type: 'info' | 'action' | 'success' | 'warn' | 'error' = 'info'): Promise<void> {
        const bgColors: Record<string, string> = {
            info: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
            action: 'linear-gradient(135deg, #b91c1c, #ef4444)',
            success: 'linear-gradient(135deg, #065f46, #10b981)',
            warn: 'linear-gradient(135deg, #92400e, #f59e0b)',
            error: 'linear-gradient(135deg, #881337, #e11d48)',
        };

        const background = bgColors[type] || bgColors.info;

        await this.driver.executeScript(
            `
            let hud = document.getElementById('selenium-e2e-hud');
            if (!hud) {
                hud = document.createElement('div');
                hud.id = 'selenium-e2e-hud';
                hud.style.position = 'fixed';
                hud.style.top = '14px';
                hud.style.left = '50%';
                hud.style.transform = 'translateX(-50%)';
                hud.style.zIndex = '999999';
                hud.style.padding = '12px 24px';
                hud.style.borderRadius = '9999px';
                hud.style.color = '#ffffff';
                hud.style.fontWeight = 'bold';
                hud.style.fontSize = '15px';
                hud.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
                hud.style.letterSpacing = '0.5px';
                hud.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
                hud.style.pointerEvents = 'none';
                hud.style.transition = 'all 0.3s ease';
                document.body.appendChild(hud);
            }
            hud.style.background = arguments[0];
            hud.innerHTML = arguments[1];
            hud.style.opacity = '1';
            `,
            background,
            message
        );
    }

    /**
     * Espera a que un elemento con data-testid esté presente en el DOM
     */
    async waitForTestId(testId: string, timeoutMs: number = 8000): Promise<WebElement> {
        const locator = By.css(`[data-testid="${testId}"]`);
        await this.driver.wait(until.elementLocated(locator), timeoutMs, `Elemento [data-testid="${testId}"] no encontrado tras ${timeoutMs}ms`);
        const element = await this.driver.findElement(locator);
        await this.driver.wait(until.elementIsVisible(element), timeoutMs, `Elemento [data-testid="${testId}"] no es visible`);
        return element;
    }

    /**
     * Obtiene un elemento por su data-testid
     */
    async getByTestId(testId: string): Promise<WebElement> {
        return this.driver.findElement(By.css(`[data-testid="${testId}"]`));
    }

    /**
     * Resalta un botón o elemento con animación brillante y borde visible
     */
    async highlightElement(element: WebElement, color: string = '#ef4444'): Promise<void> {
        await this.driver.executeScript(
            `
            const el = arguments[0];
            const color = arguments[1];
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.dataset.prevOutline = el.style.outline || '';
            el.dataset.prevBoxShadow = el.style.boxShadow || '';
            el.dataset.prevTransform = el.style.transform || '';
            el.dataset.prevTransition = el.style.transition || '';
            
            el.style.transition = 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            el.style.outline = '4px solid ' + color;
            el.style.outlineOffset = '4px';
            el.style.boxShadow = '0 0 24px ' + color;
            el.style.transform = 'scale(1.04)';
            `,
            element,
            color
        );
    }

    /**
     * Remueve el resaltado de un elemento
     */
    async unhighlightElement(element: WebElement): Promise<void> {
        await this.driver.executeScript(
            `
            const el = arguments[0];
            el.style.outline = el.dataset.prevOutline || '';
            el.style.boxShadow = el.dataset.prevBoxShadow || '';
            el.style.transform = el.dataset.prevTransform || '';
            el.style.transition = el.dataset.prevTransition || '';
            delete el.dataset.prevOutline;
            delete el.dataset.prevBoxShadow;
            delete el.dataset.prevTransform;
            delete el.dataset.prevTransition;
            `,
            element
        );
    }

    /**
     * Resalta y presiona un botón identificado por data-testid,
     * permitiendo que el usuario vea claramente qué botón se está presionando.
     */
    async clickButtonByTestId(testId: string, label: string = testId): Promise<void> {
        console.log(`  👉 Preparando clic en botón: "${label}" ([data-testid="${testId}"])`);
        await this.showBanner(`🔘 Presionando botón: <b>${label}</b>`, 'action');

        const button = await this.waitForTestId(testId);

        // 1. Resaltar botón de forma llamativa (rojo/naranja)
        await this.highlightElement(button, '#ef4444');

        // Pausa visible para que el espectador aprecie qué botón se va a presionar
        await this.sleep(this.highlightDurationMs);

        // 2. Efecto de "pulsación" (scale down + flash)
        await this.driver.executeScript(
            `
            arguments[0].style.transform = 'scale(0.95)';
            arguments[0].style.filter = 'brightness(1.2)';
            `,
            button
        );
        await this.sleep(150);

        // 3. Ejecutar el clic
        await button.click();

        // Pausa posterior al clic
        await this.sleep(this.postActionDelayMs);

        // 4. Limpiar efectos visuales
        try {
            await this.unhighlightElement(button);
        } catch {
            // El elemento pudo haberse desmontado o redireccionado la página
        }
    }

    /**
     * Resalta un input y escribe texto carácter por carácter
     * para que sea visible en pantalla
     */
    async typeInputByTestId(testId: string, text: string, label: string = testId): Promise<void> {
        console.log(`  ✍️ Escribiendo en: "${label}" -> "${text}"`);
        await this.showBanner(`✍️ Escribiendo en <b>${label}</b>: "${text}"`, 'info');

        const input = await this.waitForTestId(testId);

        // Resaltar input con color verde esmeralda
        await this.highlightElement(input, '#10b981');
        await this.sleep(250);

        // Limpiar el campo
        await input.clear();

        // Escribir simulando teclado humano para que sea visible
        for (const char of text) {
            await input.sendKeys(char);
            if (this.typingDelayMs > 0) {
                await this.sleep(this.typingDelayMs);
            }
        }

        await this.sleep(200);
        await this.unhighlightElement(input);
    }

    /**
     * Limpia un campo input por su testId
     */
    async clearInputByTestId(testId: string): Promise<void> {
        const input = await this.waitForTestId(testId);
        await input.clear();
    }

    /**
     * Obtiene el valor actual de un atributo (ej. type, value)
     */
    async getAttribute(testId: string, attributeName: string): Promise<string | null> {
        const element = await this.waitForTestId(testId);
        return element.getAttribute(attributeName);
    }

    /**
     * Obtiene el texto visible de un elemento
     */
    async getText(testId: string): Promise<string> {
        const element = await this.waitForTestId(testId);
        return element.getText();
    }

    /**
     * Verifica si un elemento con data-testid existe y es visible
     */
    async isVisible(testId: string): Promise<boolean> {
        try {
            const locator = By.css(`[data-testid="${testId}"]`);
            const elements = await this.driver.findElements(locator);
            if (elements.length === 0) return false;
            return await elements[0].isDisplayed();
        } catch {
            return false;
        }
    }
}
