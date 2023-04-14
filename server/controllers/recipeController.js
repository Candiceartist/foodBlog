
require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe')

exports.homepage = async(req, res) => {
    try {
    const limitNumber = 5;
    const categories = await Category.find({}).limit(limitNumber);
    const latest = await Recipe.find({}).sort({_id:-1}).limit(limitNumber);
    
    const food = { latest };

    res.render('index', {title:"Good Eats-Food Blog Home", categories, food});
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

exports.exploreRecipe = async(req, res) => {
    try {
    let recipeId = req.params.id;

    const recipe = await Recipe.findById(recipeId);

    res.render('recipe', {title:"Good Eats-Food Blog Recipe", recipe});
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occured"});
    }
}


// async function insertDummyRecipeData(){
//     try {
//         await Recipe.insertMany([
//             {
//                 "name":"Gluten Free Orange Chicken ",
//                 "description":"1.Whisk the hoisin sauce, vinegar, soy sauce, sugar, cornstarch, and water in a bowl. Place chicken into ziptop bag and pour 6 tbsp of the marinade mixture over the chicken and seal. Toss chicken in marinade and refrigerate for at least 30 minutes. Set aside 2 tbsp of the marinade for later. 2.To make the sauce, heat the tbsp of canola oil in a large skillet over medium heat. Add the garlic, ginger, and red pepper flakes and saute just until fragrant. Add the rest of the marinade and simmer, stirring occasionally, until the mixture thickens. Cover the sauce and remove from the heat. Keep warm until ready. 3.Begin heating the oil in a Dutch oven to 350° F. Whisk the egg whites in a shallow bowl until foamy; set aside. 4.Whisk together the cornstarch, flour, and baking soda in another shallow bowl. Add the reserved marinade and stir with a fork until it resembles small craggy bits. 5.Remove the chicken from the marinade and pat dry with paper towels. Dip half the chicken into the egg whites and then into the cornstarch mixture. Make sure to press into the chicken to adhere the little craggy bits. Transfer chicken to a plate and finish dipping and dredging all of it. 6Fry the chicken, half at a time, in 350° F oil for 2-3 minutes, or until golden brown and crispy. Transfer the cooked chicken on paper towels to drain. 7.Heat the sauce until gently simmering. Turn off the heat and add the fried chicken pieces. Toss to coat and serve over steamed white or brown rice, sprinkling with chopped green onions for garnish, if desired.",
//                 "Source":"https://www.letthemeatgfcake.com/gluten-free-general-tsos-chicken/",
//                 "email":"candice.artist@gmail.com",
//                 "ingredients":[
//                     "egg whites",
//                     "water",
//                     "white vinegar",
//                     "gluten free all purpose flour",
//                     "corn starch",
//                     "baking soda",
//                     "green onions",
//                     "crushed red pepper",
//                     "sugar",
//                     "tamari",
//                     "garlic",
//                     "ginger",
//                     "oil",
//                     "cubed chicken"
                
//                 ],
//                 "category":"Chinese",
//                 "image":"gf-orange-chicken.jpg"

//             }
            
//         ]);
//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDummyRecipeData();





// async function insertDummyCategoryData(){
//     try {
//         await Category.insertMany([
//             {
//                 "name": "Italian",
//                 "image": "italian-food.jpg"
//             },
//             {
//                 "name": "Japanese",
//                 "image": "japanese-food.jpg"
//             },
//             {
//                 "name": "Korean",
//                 "image": "korean-food.jpg"
//             },
//             {
//                 "name": "Turkish",
//                 "image": "turkish-food.jpg"
//             },
//             {
//                 "name": "Carribean",
//                 "image": "carribean-food.jpg"
//             },

//         ]);
//     } catch (error) {
//         console.log('err', + error)
//     }
// }

// insertDummyCategoryData();