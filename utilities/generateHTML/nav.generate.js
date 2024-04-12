const InvClass = require('../../db/inventoryClassification.db');

module.exports = async (req, res, next) => {
    const data = await InvClass.getClasssifications();

    if (!data.length) {
        console.error('!!!Error getting classification data!!!');
    }
    let list = '<ul>';
    list += '<li class="nav-item" ><a href="/" title="Home page">Home</a></li>';
    data.forEach((item) => {
        list += '<li class="nav-item" >';
        list +=
            '<a href="/inv/type/' +
            item.classification_id +
            '" title="See our inventory of ' +
            item.classification_name +
            ' vehicles">' +
            item.classification_name +
            '</a>';
        list += '</li>';
    });
    list += '</ul>';
    return list;
};
