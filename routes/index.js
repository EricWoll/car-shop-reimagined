const routes = require('express').Router();

const clasification = require('./classifications.route');

routes.use('/', clasification);

module.exports = routes;
