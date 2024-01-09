# Memotest
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en Typescript React. </br>
La pagina ofrece un juego completo de memotest y también incluye competencias entre otros jugadores.

## Tipo de proyecto
Proyecto individual.

## Capturas de pantalla 
<img src="https://i.postimg.cc/Qd2dxFWb/Memotest1.png"/>
<img src="https://i.postimg.cc/4NvDhnMP/Memotest2.png"/>

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
Smart:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
Dumb: No manejan la lógica, se encargan únicamente de la presentación.

### Carpeta Auxiliar
En esta carpeta guardo distintos types o variables constantes que usare a lo largo de todo el proyecto, de esta forma evito repetir código y con las variable contantes definidas evito tener cadenas mágicas 

### Test
Realizo varios test automaticos sobre distintos componentes. Estos test los hice con el fin de poder realizar cambios sobre estos componentes (refactorizarlos) y luego asegurarme que todos los componentes funcionen de la misma forma.

## Tecnologías utilizadas
  - React
  - CSS
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
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en). </br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto

## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run dev
```
y dirigirse a la dirección que se muestra en consola

Para poder correr los test escriba el siguiente comando:
```
npm run test
```
En caso de saltarse los paso de instalación y querer probar el proyecto en linea visitar el siguiente link: https://gleaming-pudding-4d279d.netlify.app

</br>

> [!NOTE]
> Tanto el server como la base de datos pueden ser lentas. Porfavor tenga paciencia.

