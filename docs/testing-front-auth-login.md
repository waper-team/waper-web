# Testing Frontend: Auth / Login

## Objetivo

Validar el formulario de acceso desde la interfaz y cubrir la petición HTTP real del servicio, incluyendo la navegación al perfil, el rechazo de credenciales y el estado de carga. Esto detecta desajustes entre Login, la API y la configuración de pruebas sin depender del backend.

## Tecnologías

Versiones declaradas en `package.json`:

| Tecnología | Versión declarada |
| --- | --- |
| Vitest | `^5.0.3` |
| React Testing Library | `^16.3.3` |
| `@testing-library/user-event` | `^14.6.7` |
| `@testing-library/jest-dom` | `^7.0.1` |
| MSW | `^2.15.0` |
| jsdom | `^30.1.1` |

## Arquitectura

Vitest monta `LoginPage` en jsdom con React Testing Library. `user-event` completa y envía el formulario. `LoginPage` llama a `ProfileService.login`, que usa `fetch` contra `http://localhost:3000/api/auth/login` por defecto (o `VITE_API_URL` si está definida). El servidor de MSW intercepta la petición y devuelve datos simulados; el componente actualiza localStorage, navega, o muestra el error según la respuesta.

```text
Vitest → React Testing Library → LoginPage → user-event
       → ProfileService → fetch → MSW → UI / navegación
```

## Archivos creados y modificados

### Creados

- `docs/testing-front-auth-login.md`: esta documentación del flujo probado y los resultados.

### Modificados

- `vitest.config.js`: declara jsdom, carga `src/test/setup.js` y limita la suite a un worker, evitando el consumo de memoria excesivo que se observó con el paralelismo predeterminado.
- `src/features/auth/pages/LoginPage.test.jsx`: contiene cinco pruebas de integración de Login; el caso exitoso usa rutas reales de React Router.
- `test/interestMapper.test.js`: migra las dos pruebas preexistentes de `node:test` a Vitest para que `npm run test` las descubra y reporte.

### Configuración existente revisada

- `src/test/setup.js`: inicia MSW antes de las pruebas con `onUnhandledRequest: "error"`, limpia overrides después de cada caso y cierra el servidor al final.
- `src/test/mocks/server.js`: instancia `setupServer(...handlers)`.
- `src/test/mocks/handlers.js`: registra la respuesta exitosa por defecto para `POST http://localhost:3000/api/auth/login`.
- `src/features/services/ProfileService.js`: construye la URL desde `VITE_API_URL` o el valor local predeterminado, interpreta el JSON y propaga el mensaje enviado por el backend.
- `src/features/auth/pages/LoginPage.jsx`: guarda `user._id` (o `user.id`) en `waperUserId` y navega a `/profile` al autenticar; presenta el error capturado y siempre libera el loading.

## MSW en Vitest

`server.js` crea el servidor con los handlers exportados por `handlers.js`. El setup global registra `server.listen({ onUnhandledRequest: "error" })` en `beforeAll`, llama `server.resetHandlers()` en `afterEach` para eliminar los handlers particulares de cada prueba y cierra el servidor con `server.close()` en `afterAll`. Una URL o método no interceptado falla explícitamente en vez de producir un `fetch failed` opaco.

## Casos de Login

1. **Render:** monta Login y comprueba los labels de correo y contraseña y el botón de inicio.
2. **Completar formulario:** escribe ambos valores mediante `user-event` y comprueba el valor de cada input.
3. **Login exitoso:** usa el handler MSW exitoso, envía el formulario y comprueba que se renderiza la ruta `/profile` y que `waperUserId` contiene el identificador de la respuesta.
4. **Credenciales incorrectas:** reemplaza el handler con una respuesta `401` que incluye `message: "Credenciales incorrectas"`; comprueba el mensaje final que `ProfileService` propaga a Login.
5. **Loading:** deja pendiente la respuesta MSW, comprueba que el botón cambia a “Iniciando sesión...” y queda deshabilitado, y libera la respuesta para no dejar la petición abierta.

## Arrange, Act, Assert

Cada prueba prepara el router, MSW y el usuario (**Arrange**); realiza acciones de escritura/click con `user-event` (**Act**); y verifica campos, navegación, almacenamiento, error o loading (**Assert**). Por ejemplo, el caso exitoso prepara Login y el handler predeterminado, envía credenciales y luego comprueba el heading del perfil y el identificador almacenado.

## Ejecución

```bash
npm run test
```

El script ejecuta Vitest. Para correr solamente el caso de Login:

```bash
npx vitest run src/features/auth/pages/LoginPage.test.jsx
```

## Resultado observado

- `npm run test -- --run`: **2 archivos aprobados, 7 pruebas aprobadas** (5 Login y 2 de `interestMapper`).
- `npm run build`: **correcto**, Vite 8.0.16 generó el bundle de producción.

## Problema encontrado y solución

Vitest tenía una configuración independiente (`vitest.config.js`) que no cargaba `src/test/setup.js`. Por eso el servidor MSW no arrancaba durante Vitest, aunque estuviera definido, y las peticiones reales acababan en `fetch failed`. Se configuró `setupFiles` en Vitest; los handlers ya coincidían con la URL real de `ProfileService`.

También había un test de éxito que esperaba un texto de bienvenida que la aplicación no muestra. Se verificó el comportamiento real: guardar el identificador y navegar a `/profile`. Por último, `test/interestMapper.test.js` usaba `node:test`, así que Vitest ejecutaba sus assertions pero reportaba que el archivo no tenía suite; se adaptó a las APIs de Vitest. La concurrencia predeterminada agotó la memoria disponible al iniciar workers, por lo que la configuración quedó limitada a un worker. Tras esos cambios, las siete pruebas y el build terminaron correctamente.
