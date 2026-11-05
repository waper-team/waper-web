# Job de pruebas en GitHub Actions

## Qué se cambió

En `.github/workflows/ci-cd.yml` completé el job `test` que ya estaba creado.
El job sigue dependiendo de `sonarcloud` mediante `needs: sonarcloud`, así que
GitHub Actions no empieza las pruebas hasta que ese job termine correctamente.

Después del checkout del repositorio, el job:

1. Configura Node.js 22 con `actions/setup-node@v3`.
2. Instala exactamente las dependencias del `package-lock.json` con `npm ci`.
3. Ejecuta `npm test -- --run`, que llama al script `test` de `package.json`
   (Vitest) y le pasa `--run` para que finalice sin quedarse en modo observación.

Si la instalación o alguna prueba falla, el paso devuelve un código de error y
GitHub Actions marca el job como fallido. Por la cadena que ya tenía el workflow,
los jobs que necesitan `test` no continúan.

## Por qué se usa Node 22

La versión instalada de Vite en este proyecto declara como requisito Node
`^20.19.0 || >=22.12.0`. Para cumplir ese requisito de forma predecible, el
workflow usa Node 22 en vez de Node 18 o de una versión temprana de Node 20.

## Dependencias y herramientas

- GitHub Actions `actions/checkout@v3`: ya estaba en el job y prepara el código.
- GitHub Actions `actions/setup-node@v3`: se agregó para seleccionar Node.js.
- Node.js 22 y npm: se usan en el runner `ubuntu-latest` de GitHub Actions.
- `npm ci`: usa el `package-lock.json` existente y no agrega ni actualiza
  dependencias del proyecto.
- Vitest: ya estaba instalado en `devDependencies` y ya era el script `npm test`.

No instalé plugins, paquetes ni herramientas adicionales. Tampoco cambié el
job de SonarCloud, versionado o deploy.

## Cómo ejecutarlo

En la raíz del proyecto, con Node.js instalado:

```powershell
npm ci
npm test -- --run
```

Para revisar localmente qué archivos cambiaron:

```powershell
git status --short
git diff -- .github/workflows/ci-cd.yml
```

## Cómo publicar la rama para abrir el PR

La rama de trabajo es `feature/ci-cd-pipeline`. Después de revisar los cambios,
se puede guardar y subir con:

```powershell
git add .github/workflows/ci-cd.yml docs/job-test-ci.md
git commit -m "Configure frontend test job in CI"
git push -u origin feature/ci-cd-pipeline
```

Luego se abre un Pull Request desde esa rama hacia `main`, siguiendo el flujo
acordado por el equipo. El archivo `.github/workflows/ci-cd.yml` actualmente
dispara por pushes y PRs a `main` y `develop`.

## Estado previo que se conservó

Al empezar ya había una modificación local en
`src/features/auth/pages/LoginPage.test.jsx`. No forma parte de este trabajo y
se dejó fuera del cambio y de los comandos `git add` anteriores. Revisala antes
de hacer otros commits para no mezclar tareas.
