const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = express();
const port = process.env.Port || 3000;

require('dotenv').config();

// middleware
app.use(express.urlencoded( {extended:true} ));
// public folder to shorten path to object
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', './layouts/main')
//  set view engine to ejs
app.set('view engine', 'ejs');


// use all routes
const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);


app.listen(port,()=> console.log(`Listening to port ${port}`))