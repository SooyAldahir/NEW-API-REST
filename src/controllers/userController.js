const User = require('../models/userModel');

// Crear usuario
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
      
    }
};

// Obtener usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
       
    }
};

// Obtener un usuario por ID (Read)
exports.getUserbyId = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json({ message: 'Usuario obtenido exitosamente', user });
    } catch (error) {
    }
  };

// Actualizar usuario
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (error) {
    
    }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "Usuario eliminado" });
    } catch (error) {
    }
};