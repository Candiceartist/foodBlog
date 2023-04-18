const express = require('express')
const mealRouter = express.Router()
const axios = require('axios')





mealRouter.get('', async(req, res) => {
    try {
     const newAPI = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
     console.log(newAPI.data)

    } catch (error) {
        if(error.response) {
            console.log(err.response.data)
            console.log(err.response.data)
            console.log(err.response.data)
            console.log(err.response.data)
        }

    }

})


  module.exports = mealRouter