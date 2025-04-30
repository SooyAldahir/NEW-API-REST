const User = require('../models/userModel');
const {IDChecker, ObjectChecker, BodyChecker} = require('../ErrorHandling/Handling');

// Crear usuario
exports.createUser = async (req, res) => {
    try {
        const body = req.body;
        const isGood = await BodyChecker(body, res, "Usuario") 
        
        if (isGood == true) {
            const user = await User.create(body);
            return res.status(201).json({Resultado: user})
        }

    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
};



// Obtener usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        await ObjectChecker(users, res, "Usuarios", "obtenidos")

    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
};



// Obtener un usuario por ID (Read)
exports.getUserbyId = async (req, res) => {
    try {
        const id = req.params.id
        const isvalid = await IDChecker(id, res, "Usuario")

        if (isvalid == true) {
            const user = await User.findById(id);
            await ObjectChecker(user, res, "Usuario", "encontrado")
        }
      
    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
  };



// Actualizar usuario
exports.updateUser = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id

        const isvalid = await IDChecker(id, res, "Usuario")
        const isGood = await BodyChecker(body, res, "Usuario")

        if (isGood == true && isvalid == true) {
            const user = await User.findByIdAndUpdate(id, body, { new: true });
            await ObjectChecker(user, res, "Usuario", "actualizado")
        }

    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
};



// Eliminar usuario
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const isvalid = await IDChecker(id, res, "Usuario")
        
        if (isvalid == true) {
            const user = await User.findByIdAndDelete(id);
            await ObjectChecker(user, res, "Usuario", "eliminado")
        }

    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
};