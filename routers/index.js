const express = require('express');
const { companyRouter } = require('./companyRouter.js')
const { priceRouter } = require('./priceRouter.js')

const rootRouter = express.Router();

rootRouter.use('/company', companyRouter)
rootRouter.use('/price', priceRouter)

module.exports = {
    rootRouter
}