# Todo App Firebase Functions

Este proyecto utiliza Firebase Functions para manejar una aplicación de tareas (Todo App). A continuación, se describen los paquetes utilizados y los comandos necesarios para ejecutar el proyecto en local.

## Paquetes Utilizados

### Dependencias

- **express**: Framework web para Node.js, utilizado para manejar las rutas y las solicitudes HTTP.
- **firebase-admin**: SDK de administración de Firebase, utilizado para interactuar con los servicios de Firebase desde el servidor.
- **firebase-functions**: SDK de Firebase Functions, utilizado para definir y desplegar funciones en Firebase.

### Dependencias de Desarrollo

- **@types/express**: Tipos de TypeScript para Express.
- **@typescript-eslint/eslint-plugin**: Plugin ESLint para TypeScript, utilizado para aplicar reglas de estilo y calidad de código.
- **@typescript-eslint/parser**: Parser ESLint para TypeScript.
- **eslint**: Herramienta de análisis estático de código para identificar patrones problemáticos.
- **eslint-config-google**: Configuración de ESLint basada en las reglas de estilo de Google.
- **eslint-plugin-import**: Plugin ESLint para soportar reglas relacionadas con la importación de módulos.
- **firebase-functions-test**: Herramienta para probar Firebase Functions.
- **typescript**: Lenguaje de programación que extiende JavaScript añadiendo tipos estáticos.

## Comandos para Ejecutar en Local

### Servir el Emulador

Para correr el emulador de Firebase Functions en local:

```sh
npm run serve

Para un hotreload del codigo

npm run build:watch 
Para desplegar la app

npm run build:watch 

### Desplegar la Aplicación

Para desplegar la aplicación en Firebase:

```sh
firebase deploy --only functions
```

```