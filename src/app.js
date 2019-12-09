const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const routes = require('./routes/index.js');

const app = express();

// MIDDLEWARES
app.use(morgan());

// HELMET - request protection
app.use(helmet());

// XSS Prevention
app.use(xss());

// Rate Limiting
const limitConfig = {
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP. Please, try again in an hour.'
};
app.use(rateLimit(limitConfig));

// COMPRESS SERVER TEXT-BASED RESPONSES
app.use(compression());

// VIEW ENGINE & VIEWS DIRECTORY
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// SET PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// 404 Page
app.get('*', (req, res) => {
  res.status(404).send('Page not found bro');
});

module.exports = app;
