const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override');




const app = express();

const port = process.env.Port || 3000;


require('dotenv').config();




// app.get('/search', async (req, res) => {
//     let searchInput = req.body.searchTerm;
//     fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
//     .then(response => response.json());


//   })



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
app.use(methodOverride('_method'))

app.set('layout', './layouts/main')
//  set view engine to ejs
app.set('view engine', 'ejs');


// use all routes
const outsideroute = require('./server/routes/mealRouter')
app.use("/new",outsideroute)
const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);


app.listen(port,()=> console.log(`Listening to port ${port}`))