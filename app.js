// app.js
// DEPENDENCIES
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Spooky Travel API');
});

const toursController = require('./controllers/toursController');
const reviewsController = require('./controllers/reviewsController'); 

app.use('/tours', toursController);
app.use('/tours/:tour_id/reviews', reviewsController); 

// 404 PAGE
app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

// EXPORT
module.exports = app;
