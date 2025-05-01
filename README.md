# API REST  - Para gestión de Productos y Usuarios

API desarrollada en Node.js y MongoDB que permite realizar operaciones CRUD y consultas avanzadas.

## Tecnológias
- **Backend**: Node.js + Express
- **Base de Datos**: MongoDB (local/ Atlas)
- **Documentación**: Swagger UI
- **Desplegue**: Railway

## Para su ejecución localmente:

### Requisitos:
- Node.js instalado
- npm instalado
- MongoDB instalado o Atlas
- Git configurado

### Para ejecutar el proyecto:
- Clonar el repositorio
```bash
  git clone https://github.com/SooyAldahir/NEW-API-REST.git
  cd NEW-API-REST
```

**Instalar las dependencias**
```bash
  npm install
```

**Configurar nuestra variable de entorno (en la raiz del proyecto) - (crear el .env) **
```bash
  PORT=3005
  MONGO_URI=mongodb://localhost:27017/ProductUserManagement
```

**Iniciar la API**
```bash
  npm run dev

  nmp start
```

# Documentación de la API

Se puede acceder a la interfaz Swagger UI en:
```bash
  http://localhost:3005/api-doc
```
Incluye:
- Endpoints CRUD para los productos y usuarios.
- Consultas avanzadas (agregación).


**¿Qué es Swagger?**
Swagger es una herramienta que permite documentar, visualizar y probar una API de forma interactiva desde un navegador web. Utiliza una especificación conocida como OpenAPI, que describe los endpoints disponibles, los métodos HTTP que se pueden usar (GET, POST, etc.), los parámetros que acepta, las respuestas esperadas, entre otros detalles.

**¿Qué contiene un Swagger?**

Un archivo Swagger (también llamado OpenAPI) típicamente contiene:

Información general de la API (nombre, versión, descripción).

Rutas disponibles (endpoints), como /api/createProduct, /api/getAllProducts, etc.

Métodos HTTP para cada ruta (GET, POST, PUT, DELETE).

Parámetros de entrada, como datos del cuerpo (JSON), query params, headers.

Respuestas esperadas, con códigos de estado como 200 OK, 404 Not Found, 500 Internal Server Error, etc.

Modelos de datos que definen la estructura de los objetos que se envían o reciben.

Pruebas en vivo: permite enviar solicitudes directamente desde el navegador.


**Ejemplo de cómo se usa Swagger:**
Accedes a la URL donde está Swagger (por ejemplo: https://mi-api.up.railway.app/docs).

Visualizas todos los endpoints disponibles.

Seleccionas un endpoint como POST /api/createProduct.

Llenas los datos requeridos (por ejemplo, un producto con nombre, precio, stock).

Presionas “Try it out” y luego “Execute”.

Swagger envía la petición y muestra la respuesta de la API.



## Despligue en Railway:
La API esta desplegada en: Railway

```bash
https://new-api-rest-production-1432.up.railway.app/api-doc/
```

