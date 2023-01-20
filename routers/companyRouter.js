const express = require('express');
const { getAllCompany, addCompany, deleteCompanyById } = require('../controllers/companyController.js')

const companyRouter = express.Router();

companyRouter.post('/', addCompany)
companyRouter.get('/', getAllCompany)
companyRouter.delete('/:id', deleteCompanyById)


module.exports = {
    companyRouter
}