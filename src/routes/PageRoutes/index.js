const { Router } = require('express');

const router = Router();
const brand = 'Interserve Construct';

router.get('/', (req, res) => {
  res.render('index.ejs', {
    // eslint-disable-next-line comma-dangle
    title: `${brand} - Top construction firm in Nigeria`
  });
});

router.get('/services', (req, res) => {
  res.render('services.ejs', {
    // eslint-disable-next-line comma-dangle
    title: `${brand} - Services porta cabin, construction, warehouse, solar panel`
  });
});

router.get('/projects', (req, res) => {
  res.render('projects.ejs', {
    // eslint-disable-next-line comma-dangle
    title: `${brand} - Our Projects`
  });
});

router.get('/contact', (req, res) => {
  res.render('contact.ejs', {
    // eslint-disable-next-line comma-dangle
    title: `${brand} - Contact`
  });
});

router.get('/about', (req, res) => {
  res.render('about.ejs', {
    // eslint-disable-next-line comma-dangle
    title: `${brand} - About us`
  });
});

module.exports = router;
