const routes = require('express').Router();
const invClass = require('../controllers/inventoryClassification.controller');

routes.get('/', invClass.buildViewByClassification);

module.exports = routes;
