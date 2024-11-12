# MercadoLibre Challenge

Prueba Frontend Mercadolibre

## Indice

## Tabla de contenidos

- [MercadoLibre Challenge](#mercadolibre-challenge)
  - [Indice](#indice)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Instrucciones](#instrucciones)
  - [Stack utilizado](#stack-utilizado)
  - [Testing](#testing)

## Instrucciones

- ejecutar `npm install` en la raiz del proyecto y instalara las dependencias del backend como las de la carpeta frontend
- Ejecutar `npm run dev` en la raiz del proyecto , ejecutara tanto el servidor the backend con nodejs y express y el front con react por medio de concurrently.

## Stack utilizado

    -Frontend
    -React
    -Sass
    -Vite
    -ReactQuery
    -Vitest
    -Helmet (SEO)

    -Backend
    -NodeJs
    -Express

## Testing

- Se crearon casos de test sencillos para algunos componentes del front, tanto en renderizado como en funcionalidad con mock de datos para las respuestas de los servicios
  para ejectutarlos una vez en la raiz del proyecto ejecutar `npm run test:frontend` o `npm run test:frontend:ui`
  ![Testing](./docu/screenshots/testResults.png)
