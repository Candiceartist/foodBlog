
require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe')

exports.homepage = async(req, res) => {
    try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);


    res.render('index', {title:"Good Eats-Food Blog Home", categories});
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}

exports.exploreCategories = async(req, res) => {
    try {
    const limitNumber = 20;
    const categories = await Category.find({}).limit(limitNumber);


    res.render('categories', {title:"Good Eats-Food Blog Categories", categories});
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}
