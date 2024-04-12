require('dotenv').config();
const GenHtml = require('../utilities/generateHTML');

const invClassification = {};

invClassification.buildViewByClassification = async function (req, res, next) {
    const nav = await GenHtml.nav();
    res.render('inventory/classification', {
        title: 'Nav',
        nav,
    });
};

module.exports = invClassification;
