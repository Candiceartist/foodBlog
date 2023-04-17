const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


const app = express();
const port = process.env.Port || 3000;

require('dotenv').config();

// middleware
app.use(express.urlencoded( {extended:true} ));
// public folder to shorten path to object
app.use(express.static('public'));
app.use(expressLayouts);
app.use(cookieParser('FoodBlogSecure'));
app.use(session({
    secret: 'FoodBlogSecretSession',
    saveUninitialized: true,
    resave: true,
}));
app.use(flash());
app.use(fileUpload());

app.set('layout', './layouts/main')
//  set view engine to ejs
app.set('view engine', 'ejs');


// use all routes
const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);


app.listen(port,()=> console.log(`Listening to port ${port}`))