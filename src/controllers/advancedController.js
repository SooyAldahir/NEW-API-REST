const Product = require('../models/productModel');
const User = require('../models/userModel');
const {ObjectChecker} = require('../ErrorHandling/Handling');


// Promedio de precios por categorias

const averagePriceByCategory = async (req, res) => {
    try {
        const result = await Product.aggregate([
            {
                $group: {
                    _id: "$category",
                    averagePrice: { $avg: "$price" },
                    totalProducts: { $sum: 1 },
                }
            }
        ]);

        ObjectChecker(result, res, "Promedio de precios")


    } catch (error) {
        res.status(500).json({ message: "Error al calcular promedio de precios", Error: error.toString() });
    }
}



//  Cantidad de productos por categorias

const countProductsByCategory = async (req, res) => {
    try {
        const result = await Product.aggregate([
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 },
                }
            }
        ]); 

        ObjectChecker(result, res, "Productos")


    } catch (error) {
        res.status(500).json({ message: "Error al contar productos", Error: error.toString() });
    }
}



// Usuarios registrados en el último mes

const usersRegisteredLastMonth = async (req, res) => {
    try {
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);

        const users = await User.aggregate([
            {$match: {registrationDate: { $gte: monthAgo }}},
            {$sort: {registrationDate: -1}},
        ]);
        
        if (users.length === 0) {
            return res.status(404).json({ message: "No se encontraron usuarios registrados en el último mes." });
        }
        res.status(200).json({ message: "Usuarios registrados en el último mes.", results: users });

    } catch (error) {
         res.status(500).json({ message: "Error al obtener usuarios", error: error.toString() });
    }
}



// Total de stock agrupado por categoría

const totalStockByCategory = async (req, res) => {
    try {
        const result = await Product.aggregate([
            {
                $group: {
                    _id: "$category",
                    totalStock: { $sum: "$stock" },
                }
            }
        ]);

        ObjectChecker(result, res, "Suma de stocks")


    } catch (error) {
        res.status(500).json({ message: "Error al sumar stock", Error: error.toString()});
    }
}



module.exports = {
    averagePriceByCategory,
    countProductsByCategory,
    usersRegisteredLastMonth,
    totalStockByCategory
}