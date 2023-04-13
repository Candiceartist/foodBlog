
require('../models/database');
const Category = require('../models/Category')

exports.homepage = async(req, res) => {
    res.render('index', {title:"Good Eats-Food Blog"});
}

async function insertDummyCategoryData(){
    try {
        await Category.insertMany([
            {
                "name": "Thai",
                "image": "thai-food.jpg"
            },
            {
                "name": "American",
                "image": "american-food.jpg"
            },
            {
                "name": "Chinese",
                "image": "chinese-food.jpg"
            },
            {
                "name": "Mexican",
                "image": "mexican-food.jpg"
            },
            {
                "name": "Indian",
                "image": "indian.jpg"
            },
            {
                "name": "Spanish",
                "image": "spanish-food.jp"
            },
            
        ]);
    } catch (error) {
        console.log('err', + error)
    }
}

insertDummyCategoryData();