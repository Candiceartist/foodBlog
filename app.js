const express = require('express');
const expresslayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.Port || 3000;

require('dotenv').config();