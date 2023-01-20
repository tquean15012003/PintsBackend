const { Company } = require('../models/index.js');
const { url, token, imageUrl } = require('../utils/constants.js');
const axios = require('axios')

const getAllStockPrice = async (req, res) => {
    try {
        const companyList = await Company.findAll();
        const stockPriceList = []

        for (const company of companyList) {
            await axios({
                url: `${url}/${company.symbol}?token=${token}`,
                method: "GET"
            })
                .then((response) => {
                    if (JSON.stringify(response.data[0]) !== '{}') {
                        const data = response.data[0]
                        stockPriceList.push({
                            companyName: data.companyName,
                            change: data.change,
                            changePercent: data.changePercent,
                            latestPrice: data.latestPrice,
                            symbol: data.symbol,
                            imageUrl: `${imageUrl}/${data.symbol}.png`
                        })
                    }
                })
        }

        res.status(200).send({
            message: "Get all stock price successfully!",
            stockPriceList
        });

    } catch (error) {
        res.status(500).send(error);
    };
}

module.exports = {
    getAllStockPrice
}