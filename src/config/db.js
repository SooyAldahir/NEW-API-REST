require("dotenv").config()
const mongoose = require("mongoose")

async function ConnectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado a MongoDB Mongoose.");
    } catch (error) {
        console.log("Error al conectar a MongoDB", error.toString());
    }
}

module.exports = ConnectDB;