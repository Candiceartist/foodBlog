const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const Recipe = require('../models/Recipe');
const axios = require('axios')


// app routes
router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/recipe/:id', recipeController.exploreRecipe);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search', recipeController.searchRecipe);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/explore-random', recipeController.exploreRandom);
router.get('/submit-recipe', recipeController.submitRecipe);
router.post('/submit-recipe', recipeController.submitRecipeOnPost);
router.delete('/recipe/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id)
    res.redirect('/')
  })
router.get('/edit/:id', recipeController.editRecipe);
router.post('/edit/:id', recipeController.editRecipeOnPost);






module. exports = router;