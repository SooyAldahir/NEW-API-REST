const Product = require('../models/productModel');
const User = require('../models/userModel');


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
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: "Error al calcular promedio de precios", error });
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
        rs.json(result)
    } catch (error) {
        res.status(500).json({ message: "Error al contar productos", error });
    }
}


// Usuarios registrados en el último mes

const usersRegisteredLastMonth = async (req, res) => {
    try {
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);

        const users = await User.aggregate([
            {$match: {createdAt: { $gte: monthAgo }}},
            {$sort: {createdAt: -1}},
        ]);
        res.jsom(users)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener usuarios", error });
    }
}

// Total de stock agrupado por categoría

const totalStockByCategory = async (req, res) => {
    try {
        const result = Product.aggregate([
            {
                $group: {
                    _id: "$category",
                    totalStock: { $sum: "$stock" },
                }
            }
        ]);
        res.json(result)
    } catch (error) {
        res.status(500).json({ message: "Error al sumar stock", error });
    }
}

module.exports = {
    averagePriceByCategory,
    countProductsByCategory,
    usersRegisteredLastMonth,
    totalStockByCategory
}