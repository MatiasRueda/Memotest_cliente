# Memotest cliente
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en Typescript React ,  patrón en componentes ( Smart y Dumb components ) y Jest.  Además de utilizar nuevas dependencias ( framer-motion, entre otras... ).
La pagina ofrece un juego completo de memotest y también incluye competencias entre otros jugadores.

## Personas Contribuyentes
Proyecto realizado únicamente por mi.

## Tecnologías utilizadas
  - React
  - Typescript
  - Jest

## Estructura 

```
Memotest_cliente
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ asset
│  │  ├─ musica
│  │  │  ├─ acierto.mp3
│  │  │  ├─ error.mp3
│  │  │  ├─ gameStart.mp3
│  │  │  ├─ login.mp3
│  │  │  ├─ musicaFondo.mp3
│  │  │  ├─ nextLevel.mp3
│  │  │  ├─ retry.mp3
│  │  │  └─ sonidoMenu.mp3
│  │  └─ style
│  │     ├─ app.css
│  │     ├─ carga.css
│  │     ├─ configuracion.css
│  │     ├─ ingresar.css
│  │     ├─ juego.css
│  │     ├─ menu.css
│  │     ├─ registrarse.css
│  │     ├─ reglas.css
│  │     └─ tabla.css
│  ├─ auxiliar
│  │  ├─ efecto.ts
│  │  ├─ path.ts
│  │  └─ type.ts
│  ├─ components
│  │  ├─ animation
│  │  │  ├─ ACargando.tsx
│  │  │  ├─ AFade.tsx
│  │  │  └─ APostJuego.tsx
│  │  ├─ dumb
│  │  │  ├─ DCronometro.tsx
│  │  │  ├─ DDerrota.tsx
│  │  │  ├─ DFinal.tsx
│  │  │  ├─ DJuego.tsx
│  │  │  ├─ DLabel.tsx
│  │  │  ├─ DMemotest.tsx
│  │  │  ├─ DMensaje.tsx
│  │  │  ├─ DMensajeTemporal.tsx
│  │  │  ├─ DOpciones.tsx
│  │  │  ├─ DReglas.tsx
│  │  │  ├─ DTabla.tsx
│  │  │  ├─ DUsuarioTabla.tsx
│  │  │  └─ DVictoria.tsx
│  │  └─ smart
│  │     ├─ SConfiguracion.tsx
│  │     ├─ SCronometro.tsx
│  │     ├─ SFormulario.tsx
│  │     ├─ SFormularioConfiguracion.tsx
│  │     ├─ SFormularioIngresar.tsx
│  │     ├─ SFormularioRegistrar.tsx
│  │     ├─ SFormularioReglas.tsx
│  │     ├─ SInformacion.tsx
│  │     ├─ SIngresar.tsx
│  │     ├─ SInput.tsx
│  │     ├─ SJuego.tsx
│  │     ├─ SMemotest.tsx
│  │     ├─ SMenu.tsx
│  │     ├─ SOpciones.tsx
│  │     ├─ SOpcionesMenu.tsx
│  │     ├─ SPaginas.tsx
│  │     ├─ SRegistrar.tsx
│  │     ├─ SReglas.tsx
│  │     ├─ SSaludo.tsx
│  │     ├─ STabla.tsx
│  │     └─ STiempo.tsx
│  ├─ hook
│  │  ├─ useEnviarSolicitud.tsx
│  │  ├─ useMemotest.tsx
│  │  ├─ useObtenerInfo.tsx
│  │  ├─ usePantallaCarga.tsx
│  │  └─ usePantallaJuego.tsx
│  ├─ logic
│  │  ├─ constructorTablero.ts
│  │  ├─ cronometro.ts
│  │  ├─ memotest.ts
│  │  └─ memotestConfig.ts
│  ├─ main.tsx
│  ├─ page
│  │  ├─ Configuracion.tsx
│  │  ├─ Ingresar.tsx
│  │  ├─ Juego.tsx
│  │  ├─ Menu.tsx
│  │  ├─ Registrar.tsx
│  │  ├─ Reglas.tsx
│  │  └─ Tabla.tsx
│  ├─ react-app-env.d.ts
│  └─ test
│     └─ logic
│        └─ memotest.test.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ tsconfig.spec.json
└─ vite.config.ts

```
## Instalación 
Es necesario instalar nodeJS, para eso es necesario ir a la siguiente pagina y descargarlo:
https://nodejs.org/en

## Uso
Una vez clonado el repositorio o descargado el zip ( y después de extraerlo ). 
Abrir la terminal en la carpeta donde se clono ( o se extrajo ) y escribir el siguiente comando.
```
npm i
```
Esto instalara las dependencias que el proyecto necesita
Para poder utilizar el proyecto es necesario tener una conexión a un server , que a su vez tenga conexión a una base de datos y aplicar el siguiente comando:
```
npm run dev
```
Para poder correr los test escriba el siguiente comando:
```
npm run test
```
En caso de querer ver la pagina con server incluido y poder jugar: https://gleaming-pudding-4d279d.netlify.app

> [!NOTE]
> Tanto el server como la base de datos pueden ser lentas. Porfavor tenga paciencia.

