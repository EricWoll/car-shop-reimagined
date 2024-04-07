const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.uri = dbConfig.uri;

// Add model require statements
/* Example:
db.animals = require('./animals')(mongoose);
*/

module.exports = db;
