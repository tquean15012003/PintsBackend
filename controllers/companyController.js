const { Company } = require('../models/index.js');

const getAllCompany = async (req, res) => {
    try {
        const companyList = await Company.findAll();
        res.status(200).send({
            message: "Get company list successfully",
            companyList
        });
    } catch (error) {
        res.status(500).send(error);
    };
}

const addCompany = async (req, res) => {
    const { companyName, symbol } = req.body
    const companyInfo = {
        name: companyName,
        symbol
    }
    try {
        const newCompany = await Company.create(companyInfo);
        res.status(201).send({
            message: "Create new company successfully",
            company: newCompany
        });
    } catch (error) {
        res.status(500).send(error);
    };
}

const deleteCompanyById = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedCompany = await Company.findOne({
            where: {
                id
            }
        });
        await Company.destroy({
            where: {
                id
            }
        });
        res.status(200).send({
            message: "Delete company successfully",
            company: deletedCompany
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getAllCompany,
    addCompany,
    deleteCompanyById
}