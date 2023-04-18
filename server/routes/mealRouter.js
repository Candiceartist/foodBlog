const express = require('express')
const mealRouter = express.Router()
const axios = require('axios')
const expressLayouts = require('express-ejs-layouts');
let ejs = require('ejs');





mealRouter.get('', async (req, res) => {
    try {
        const newAPI = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        //  res.render('new',{ meals : newAPI.data })
        const meals = newAPI.data.meals[0]
        res.render('new', { meals: meals })
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)

        } else if (error.request) {
            console.log(error.request)
        } else {
            console.error('Error', error.message)
        }

    }

})


module.exports = mealRouter