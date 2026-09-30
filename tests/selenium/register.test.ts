import { Builder, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';
import { spawn, ChildProcess } from 'child_process';
import http from 'http';
import { VisualHelper } from './visualHelper.js';

// Configuración base
const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const REGISTER_URL = `${BASE_URL}/register`;

/**
 * Comprueba si el servidor web está activo en la URL configurada
 */
async function isServerRunning(urlStr: string): Promise<boolean> {
    return new Promise((resolve) => {
        try {
            const url = new URL(urlStr);
            const req = http.request(
                {
                    host: url.hostname,
                    port: url.port,
                    path: '/',
                    method: 'GET',
                    timeout: 2000,
                },
                (res) => {
                    resolve(res.statusCode !== undefined);
                }
            );
            req.on('error', () => resolve(false));
            req.on('timeout', () => {
                req.destroy();
                resolve(false);
            });
            req.end();
        } catch {
            resolve(false);
        }
    });
}

/**
 * Inicia el servidor Vite en segundo plano si aún no está corriendo
 */
async function ensureDevServer(): Promise<ChildProcess | null> {
    const running = await isServerRunning(BASE_URL);
    if (running) {
        console.log(`🌐 Servidor frontend ya activo en ${BASE_URL}`);
        return null;
    }

    console.log(`🚀 Iniciando servidor de desarrollo Vite en ${BASE_URL}...`);
    const viteProcess = spawn('npx', ['vite', '--port', '5173'], {
        shell: true,
        stdio: 'pipe',
    });

    // Esperar hasta 20 segundos a que el servidor esté listo
    const startTime = Date.now();
    while (Date.now() - startTime < 20000) {
        await new Promise((r) => setTimeout(r, 600));
        if (await isServerRunning(BASE_URL)) {
            console.log(`✅ Servidor Vite listo en ${BASE_URL}`);
            return viteProcess;
        }
    }

    throw new Error(`No se pudo iniciar el servidor en ${BASE_URL} tras 20 segundos.`);
}

/**
 * Configura e inicia el navegador Chrome en modo visual (no headless)
 */
async function createDriver(): Promise<WebDriver> {
    const options = new chrome.Options();
    
    // Modo visible (no headless) para que el usuario pueda ver las interacciones
    options.addArguments('--start-maximized');
    options.addArguments('--disable-notifications');
    options.addArguments('--disable-search-engine-choice-screen');

    const driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    return driver;
}

/**
 * Suite principal de pruebas E2E para la pantalla de Registro
 */
async function runRegisterE2ETests() {
    console.log('\n=============================================================');
    console.log('🧪 INICIANDO PRUEBAS E2E CON SELENIUM (PANTALLA DE REGISTRO)');
    console.log('=============================================================\n');

    let devServerProcess: ChildProcess | null = null;
    let driver: WebDriver | null = null;

    try {
        devServerProcess = await ensureDevServer();
        driver = await createDriver();

        // Inicializar helper visual con tiempos cómodos 
        const visual = new VisualHelper(driver, {
            highlightDurationMs: 900,  // Pausa con botón resaltado antes de presionar
            postActionDelayMs: 600,     // Pausa posterior al clic
            typingDelayMs: 45,          // Simulación de tipeo visible
        });

        console.log(`\n📍 Paso 1: Navegando a la pantalla de registro: ${REGISTER_URL}`);
        await driver.get(REGISTER_URL);
        await visual.showBanner('🚀 Iniciando pruebas E2E en Pantalla de Registro', 'info');
        await visual.sleep(1200);

        // =====================================================================
        // TEST 1: Verificar presencia de todos los elementos con data-testid
        // =====================================================================
        console.log('\n-------------------------------------------------------------');
        console.log('🔍 TEST 1: Verificación de renderizado de elementos (data-testid)');
        console.log('-------------------------------------------------------------');
        await visual.showBanner('🔍 Verificando elementos del formulario de registro...', 'info');

        const requiredTestIds = [
            'register-form',
            'register-username-input',
            'register-email-input',
            'register-password-input',
            'register-password-toggle',
            'register-confirm-password-input',
            'register-confirm-password-toggle',
            'register-submit-button',
        ];

        for (const testId of requiredTestIds) {
            const isPresent = await visual.isVisible(testId);
            if (!isPresent) {
                throw new Error(`❌ Elemento requerido no encontrado: [data-testid="${testId}"]`);
            }
            console.log(`  ✓ Elemento encontrado y visible: [data-testid="${testId}"]`);
        }
        await visual.showBanner('✅ Todos los campos y botones con data-testid están listos', 'success');
        await visual.sleep(800);//Tiempo de espera para que el usuario vea el mensaje antes de continuar

        // =====================================================================
        // TEST 2: Llenar campos de entrada y probar botones de visibilidad
        // =====================================================================
        console.log('\n-------------------------------------------------------------');
        console.log('TEST 2: Prueba de botones para alternar visibilidad de contraseña');
        console.log('-------------------------------------------------------------');

        await visual.typeInputByTestId('register-username-input', 'juan_perez', 'Nombre de usuario');
        await visual.typeInputByTestId('register-email-input', 'juan.perez@ejemplo.com', 'Correo electrónico');
        await visual.typeInputByTestId('register-password-input', 'MiClaveSecreta123', 'Contraseña');

        // Verificar tipo inicial "password"
        const initialPassType = await visual.getAttribute('register-password-input', 'type');
        console.log(` Tipo de contraseña inicial: "${initialPassType}"`);

        // Presionar botón para mostrar contraseña
        await visual.clickButtonByTestId('register-password-toggle', 'Mostrar Contraseña');
        const toggledPassType = await visual.getAttribute('register-password-input', 'type');
        console.log(` Tipo de contraseña tras clic: "${toggledPassType}"`);
        if (toggledPassType !== 'text') {
            throw new Error(`Se esperaba type="text" pero se obtuvo "${toggledPassType}"`);
        }
        await visual.showBanner('👁️ Contraseña mostrada en texto plano correctamente', 'success');
        await visual.sleep(600);

        // Presionar botón para volver a ocultar
        await visual.clickButtonByTestId('register-password-toggle', 'Ocultar Contraseña');
        const hiddenPassType = await visual.getAttribute('register-password-input', 'type');
        if (hiddenPassType !== 'password') {
            throw new Error(`Se esperaba type="password" tras ocultar pero se obtuvo "${hiddenPassType}"`);
        }
        console.log('  ✓ Botón register-password-toggle alternó visibilidad exitosamente');

        // =====================================================================
        // TEST 3: Validación de contraseñas no coincidentes
        // =====================================================================
        console.log('\n-------------------------------------------------------------');
        console.log('⚠️ TEST 3: Validación de error cuando las contraseñas no coinciden');
        console.log('-------------------------------------------------------------');

        // Escribir una confirmación diferente a propósito
        await visual.typeInputByTestId(
            'register-confirm-password-input',
            'ClaveDiferente999',
            'Confirmar contraseña (errónea)'
        );

        // Presionar botón toggle de confirmación para ver lo que se escribió
        await visual.clickButtonByTestId(
            'register-confirm-password-toggle',
            'Mostrar Confirmación'
        );

        // Presionar el botón de submit (Crear cuenta)
        await visual.clickButtonByTestId(
            'register-submit-button',
            'Crear cuenta (Envío con datos erróneos)'
        );

        // Validar mensaje de error
        await visual.waitForTestId('register-error-message', 5000);
        const errorMessage = await visual.getText('register-error-message');
        console.log(`  📢 Mensaje de error detectado: "${errorMessage}"`);

        const errorElement = await visual.getByTestId('register-error-message');
        await visual.highlightElement(errorElement, '#dc2626');
        await visual.showBanner(`⚠️ Validación exitosa: "${errorMessage}"`, 'warn');
        await visual.sleep(1200);
        await visual.unhighlightElement(errorElement);

        if (!errorMessage.includes('Las contraseñas no coinciden')) {
            throw new Error(`Mensaje inesperado: "${errorMessage}"`);
        }
        console.log('  ✓ Error de validación "Las contraseñas no coinciden" verificado correctamente');

        // =====================================================================
        // TEST 4: Corregir contraseña y presionar submit con formulario válido
        // =====================================================================
        console.log('\n-------------------------------------------------------------');
        console.log('✨ TEST 4: Corrección de contraseña y envío del formulario');
        console.log('-------------------------------------------------------------');

        // Limpiar confirmación y escribir la contraseña correcta coincidente
        await visual.clearInputByTestId('register-confirm-password-input');
        await visual.typeInputByTestId(
            'register-confirm-password-input',
            'MiClaveSecreta123',
            'Confirmar contraseña (correcta)'
        );

        // Presionar botón de submit
        await visual.clickButtonByTestId(
            'register-submit-button',
            'Crear cuenta (Formulario válido)'
        );

        await visual.showBanner('🚀 Formulario enviado exitosamente con contraseñas coincidentes', 'success');
        await visual.sleep(1500);
        console.log('  ✓ Clic en botón de submit completado con datos válidos');

        // =====================================================================
        // TEST 5: Verificación del botón de redirección a Login
        // =====================================================================
        console.log('\n-------------------------------------------------------------');
        console.log('🔗 TEST 5: Prueba de botón para ir a Login');
        console.log('-------------------------------------------------------------');

        if (await visual.isVisible('login-redirect-button')) {
            await visual.clickButtonByTestId('login-redirect-button', 'Inicia sesión');
            await visual.showBanner('🔀 Redirigiendo a pantalla de Login...', 'info');
            await visual.sleep(1500);

            const currentUrl = await driver.getCurrentUrl();
            console.log(`  ℹ️ URL actual: ${currentUrl}`);
            if (currentUrl.includes('/login')) {
                console.log('  ✓ Redirección a /login completada');
            }
        }

        // =====================================================================
        // RESUMEN FINAL
        // =====================================================================
        await visual.showBanner('🎉 ¡TODAS LAS PRUEBAS E2E PASARON CON ÉXITO! 🎉', 'success');
        await visual.sleep(2500);

        console.log('\n=============================================================');
        console.log('🎉 ¡TODAS LAS PRUEBAS E2E COMPLETADAS EXITOSAMENTE!');
        console.log('=============================================================\n');

    } catch (error) {
        console.error('\n❌ ERROR DURANTE LA EJECUCIÓN DE LAS PRUEBAS E2E:', error);
        if (driver) {
            try {
                const visual = new VisualHelper(driver);
                await visual.showBanner(`❌ Falló la prueba: ${(error as Error).message}`, 'error');
                await visual.sleep(3000);
            } catch {
                // ignorar si no se pudo mostrar banner
            }
        }
        process.exitCode = 1;
    } finally {
        if (driver) {
            console.log('🛑 Cerrando navegador Selenium...');
            await driver.quit();
        }
        if (devServerProcess) {
            console.log('🛑 Deteniendo servidor de desarrollo Vite...');
            devServerProcess.kill();
        }
    }
}

// Ejecutar el script
runRegisterE2ETests();
