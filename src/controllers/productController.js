const Product = require('../models/productModel');
const {IDChecker, ObjectChecker, BodyChecker} = require('../ErrorHandling/Handling');



// Crear Producto
exports.createProduct = async (req, res) => {
    try {
        const body = req.body;
        const isGood = await BodyChecker(body, res, "Producto") 
        
        if (isGood == true) {
            const product = await Product.create(body);
            return res.status(201).json({Resultado: product})
        }

    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
    };
    



// Obtener Producto
exports.getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        await ObjectChecker(products, res, "Productos", "encontrados")

    } catch (error) {   
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
    };




// Obtener un producto por ID (Read)
exports.getProductbyId = async (req, res) => {
    try {
        const id = req.params.id
        const isvalid = await IDChecker(id, res, "Producto")

        if (isvalid == true) {
            const product = await Product.findById(id);
            await ObjectChecker(product, res, "Producto", "encontrado")
        }
      
    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
  };




// Actualizar Producto
exports.updateProduct = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id
        
        const isvalid = await IDChecker(id, res, "Producto")
        const isGood = await BodyChecker(body, res, "Producto")
        
        if (isGood == true && isvalid == true) {
            const product = await Product.findByIdAndUpdate(id, body, { new: true });
            await ObjectChecker(product, res, "Producto", "actualizado")
        }
        
    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
    };
    
    
    
    
    // Eliminar Producto
    exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const isvalid = await IDChecker(id, res, "Producto")
        
        if (isvalid == true) {
            const product = await Product.findByIdAndDelete(id);
            await ObjectChecker(product, res, "Producto", "eliminado")
        }
        
    } catch (error) {
        res.status(500).json({message: "Un error ocurrió  ~(>_<。)＼", Error: error.toString()}); }
};