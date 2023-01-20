const express = require('express');
const { getAllStockPrice } = require('../controllers/priceController.js')

const priceRouter = express.Router();

priceRouter.get('/', getAllStockPrice)


module.exports = {
    priceRouter
}