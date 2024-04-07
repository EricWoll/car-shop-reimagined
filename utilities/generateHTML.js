const GenHTML = {};

GenHTML.nav = async function (req, res, next) {
    // replace with mongoose
    // let data = await invModel.getClassifications();
    let list = '<ul>';
    list += '<li class="nav-item" ><a href="/" title="Home page">Home</a></li>';
    // data.rows.forEach((row) => {
    //     list += '<li class="nav-item" >';
    //     list +=
    //         '<a href="/inv/type/' +
    //         row.classification_id +
    //         '" title="See our inventory of ' +
    //         row.classification_name +
    //         ' vehicles">' +
    //         row.classification_name +
    //         '</a>';
    //     list += '</li>';
    // });
    list += '</ul>';
    return list;
};

module.exports = GenHTML;
