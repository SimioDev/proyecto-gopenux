# 🚀 Prueba Gopenux Lab

¡Bienvenido a mi prueba! Este proyecto es una demostración de cómo crear una API simple con Node.js y un frontend estático, todo containerizado con Docker y orquestado con Docker Compose.

## 📦 Estructura del Proyecto

Este proyecto está dividido en dos partes principales:

- **Backend**: Una API simple creada con Node.js que devuelve la fecha actual.
- **Frontend**: Una aplicación estática que consume la API del backend y muestra la fecha.

## 🛠️ Tecnologías Utilizadas

- **Backend**: Node.js, Express
- **Frontend**: HTML, JavaScript
- **Docker**: Contenerización de aplicaciones
- **Docker Compose**: Orquestación de contenedores

## 📝 Notas

La API del backend está expuesta en el puerto 8080, y el frontend está en el puerto 8081.
El proxy Nginx está configurado para recibir tráfico en el puerto 3000 y redirigirlo al frontend.
