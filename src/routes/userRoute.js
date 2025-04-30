const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/userController');


// Esquema de datos para Swagger: User
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del Usuario
 *         email:
 *           type: string
 *           description: Correo del usuario
 *         role:
 *           type: string 
 *           enum: [admin, client]
 *           description: Rol de Usuario 
 *       required:
 *         - name
 *         - email
 *         - role
 *       example:
 *         name: Juan Pérez
 *         email: juan@example.com
 *         role: client
 */

// Rutas CRUD para Usuarios
/**
 * @swagger
 * /api/createUser:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */
router.post('/createUser', usuarioController.createUser);

/**
 * @swagger
 * /api/getUsers:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *        
 */
router.get('/getUsers', usuarioController.getUsers);

/**
 * @swagger
 * /api/getUserbyId/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/getUserbyId/:id', usuarioController.getUserbyId);

/**
 * @swagger
 * /api/updateUser/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 *       404:
 *         description: Usuario no encontrado
 */
router.put('/updateUser/:id', usuarioController.updateUser);

/**
 * @swagger
 * /api/deleteUser/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/deleteUser/:id', usuarioController.deleteUser);


module.exports = router;