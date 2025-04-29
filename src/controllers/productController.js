const Product = require('../models/productModel');

// Crear Producto
exports.createProduct = async (req, res) => {
    try {
        const product = await User.create(req.body);
        res.status(201).json(product);
    } catch (error) {
    }
};

// Obtener Producto
exports.getProduct = async (req, res) => {
    try {
        const products = await User.find();
        res.json(products);
    } catch (error) {
        
    }
};

// Obtener un usuario por ID (Read)
exports.getProductbyId = async (req, res) => {
    try {
      const product = await User.findById(req.params.id);
      res.status(200).json({ message: 'Producto obtenido exitosamente', product });
    } catch (error) {
    }
  };

// Actualizar Producto
exports.updateProduct = async (req, res) => {
    try {
        const product = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(product);
    } catch (error) {
        
    }
};

// Eliminar Producto
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Producto eliminado" });
    } catch (error) {
      
    }
};