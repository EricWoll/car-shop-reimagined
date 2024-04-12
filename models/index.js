const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = dbConfig.uri;

db.employeeAccount = require('./employeeAccount.model')(mongoose);
db.userAccount = require('./userAccount.model')(mongoose);
db.inventoryClassification = require('./inventoryClassification.model')(
    mongoose
);
db.inventory = require('./inventory.model')(mongoose);

module.exports = db;
