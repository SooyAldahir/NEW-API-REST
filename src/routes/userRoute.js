const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/userController');


router.post('/createUser', usuarioController.createUser);
router.get('/getUsers', usuarioController.getUsers);
router.get('/getUserbyId/:id', usuarioController.getUserbyId);
router.put('/updateUser/:id', usuarioController.updateUser);
router.delete('/deleteUser/:id', usuarioController.deleteUser);

module.exports = router;