const express = require('express');
const authRoutes = require('./routs/authRoutes.js');
const cookieParser = require('cookie-parser');
const path  = require('path')
const mongoose = require('mongoose');
require('dotenv').config();
// app setUp
const app = express();
// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// database connection
const dbURL = process.env.dbURL;
mongoose.set('strictQuery', false);
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000,() => {
    console.log(`listing on port 4000`);
  }))
  .catch((err) => console.log(err));

// routes
// app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
// app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);
