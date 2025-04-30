const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del producto
 *         price:
 *           type: number
 *           description: Precio del producto
 *         stock:
 *           type: number
 *           description: Productos disponibles 
 *         category:
 *           type: string
 *           description: Categoria del producto
 *       required:
 *         - name
 *         - price
 *       example:
 *         name: Lámpara LED
 *         price: 49.99
 *         stock: 100
 *         category: Iluminación
 */

/**
 * @swagger
 * /api/createProduct:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object 
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Producto creado exitosamente
 */
router.post('/createProduct', productController.createProduct);

/**
 * @swagger
 * /api/getProduct:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 *         
 */
router.get('/getProduct', productController.getProduct);

/**
 * @swagger
 * /api/getProductbyId/{id}:
 *   get:
 *     summary: Obtener producto por ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *         application/json:
 *           schema:
 *             type: object 
 *             $ref: '#/components/schemas/Product'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/getProductbyId/:id', productController.getProductbyId);

/**
 * @swagger
 * /api/updateProductId/{id}:
 *   put:
 *     summary: Actualizar un producto por ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 *       404:
 *         description: Producto no encontrado
 */
router.put('/updateProductId/:id', productController.updateProduct);

/**
 * @swagger
 * /api/deleteProduct/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;
