const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/createProduct', productController.createProduct);
router.get('/getProduct', productController.getProduct);
router.get('/getProductbyId/:id', productController.getProductbyId);
router.put('/updateProductId/:id', productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;