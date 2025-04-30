require("dotenv").config();
const express = require("express");
const ConnectDB = require("./config/db");
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const advancedRoutes = require('./routes/adavancedRoute');
const app = express(); //Inicializa el servidor express.


// swagger
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
            url: 'http://localhost:3005',
          },
        ],
      },
      apis: ['./src/routes/*.js'], // Donde están tus rutas
}


//Midellware
app.use(express.json());


//Rutas
app.use('/api/', userRoutes);
app.use('/api/', productRoutes);
app.use('/api/advanced', advancedRoutes);
//swagger
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerDoc(swaggerSpec)))



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