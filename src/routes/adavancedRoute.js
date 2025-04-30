const express = require('express')
const routes = express.Router()

const {
    averagePriceByCategory,
    countProductsByCategory,
    usersRegisteredLastMonth,   
    totalStockByCategory,
} = require('../controllers/advancedController')

/**
 * @swagger
 * /api/advanced/product/average-price-by-category:
 *   get:
 *     summary: Obtener el precio promedio por categoría
 *     tags: [Advanced queries]
 *     responses:
 *       200:
 *         description: Precio promedio por categoría obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 Electronics: 25.5
 *                 Books: 15.0
 */
routes.get('/product/average-price-by-category', averagePriceByCategory)

/**
 * @swagger
 * /api/advanced/product/count-products-by-category:
 *   get:
 *     summary: Contar productos por categoría
 *     tags: [Advanced queries]
 *     responses:
 *       200:
 *         description: Conteo de productos por categoría
 */
routes.get('/product/count-products-by-category', countProductsByCategory)

/**
 * @swagger
 * /api/advanced/user/users-registered-last-month:
 *   get:
 *     summary: Obtener usuarios registrados en el último mes
 *     tags: [Advanced queries]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
routes.get('/user/users-registered-last-month', usersRegisteredLastMonth)

/**
 * @swagger
 * /api/advanced/product/total-stock-by-category:
 *   get:
 *     summary: Obtener stock total por categoría
 *     tags: [Advanced queries]
 *     responses:
 *       200:
 *         description: Stock total por categoría
 */
routes.get('/product/total-stock-by-category', totalStockByCategory)

module.exports = routes