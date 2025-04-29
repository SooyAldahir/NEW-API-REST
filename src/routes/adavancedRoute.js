const express = require('express')
const routes = express.Router()

const {
    averagePriceByCategory,
    countProductsByCategory,
    usersRegisteredLastMonth,   
    totalStockByCategory,
} = require('../controllers/advancedController')

routes.get('/product/average-price-by-category', averagePriceByCategory)
routes.get('/product/count-products-by-category', countProductsByCategory)
routes.get('/user/users-registered-last-month', usersRegisteredLastMonth)
routes.get('/product/total-stock-by-category', totalStockByCategory)

module.exports = routes