require("dotenv").config();
const express = require("express");
const cors = require("cors")

const ConnectDB = require("./config/db");
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const advancedRoutes = require('./routes/adavancedRoute');
const app = express(); //Inicializa el servidor express.


// Configuración swagger
const swaggerUI = require("swagger-ui-express");
const swaggerDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API REST para gestión de productos y usuarios',
      version: '1.0.0',
      description: 'Documentación automática generada con Swagger para productos y usuarios',
    },
    servers: [
      {
        url: 'https://new-api-rest-production-1432.up.railway.app',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
}


//Midellware
app.use(cors());
app.use(express.json());


//Rutas principales de la API
app.use('/api/', userRoutes);
app.use('/api/', productRoutes);
app.use('/api/advanced', advancedRoutes);
//swagger para entrar a la documentación debes agregar la ruta "/api-doc"
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDoc(swaggerSpec)))


//Iniciar el servidor
const PORT = process.env.PORT || 3005
app.listen(PORT, async () => {
  try {
    //Escucha al puerto.
    await ConnectDB();
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);

  } catch (error) {
    console.log("Error al iniciar el servidor", error.toString());
  }
})

module.exports = app;