const path = require('path');
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');

const app = express();

// MIDDLEWARES
app.use(morgan());

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
