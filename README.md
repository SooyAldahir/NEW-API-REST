# API REST  - Para gestión de Productos y Usuarios

## Para su ejecución localmente:

### Debemos tener
- NodeJS instalado
- npm instalado
- MongoDB instalado
- Git instalado

### Para ejecutar el proyecto:
- Clonar el repositorio
```bash
  git clone https://github.com/SooyAldahir/NEW-API-REST.git
```

**Instalar las dependencias**
```bash
  npm install
```


**Configurar nuestra variable de entorno (en la raiz del proyecto)**
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

## Despegación:
La API esta desplegada en: Railway

## Estructura del proyecto

NEW-API-REST/
├── src/
│   ├── controllers/    # Endpoints
│   ├── models/         # Esquemas de MongoDB
│   ├── routes/         # Definición de rutas
│   └── server.js       # Punto de entrada
├── .env                # Variable de entorno
└── package.json        # Dependencias