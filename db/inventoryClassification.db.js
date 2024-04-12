const DB = require('../models');
const InvClass = DB.inventoryClassification;

const inv_db = {};

inv_db.getClasssifications = async () => {
    return await InvClass.find(
        {},
        {
            _id: 0,
        }
    )
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.error('getclassifications error ' + error);
        });
};

module.exports = inv_db;
