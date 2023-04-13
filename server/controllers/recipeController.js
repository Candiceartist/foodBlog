
require('../models/database');
const Category = require('../models/Category')

exports.homepage = async(req, res) => {
    try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);


    res.render('index', {title:"Good Eats-Food Blog Home", categories});
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}
