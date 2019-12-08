const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/services", (req, res) => {
  res.render("services.ejs");
});

router.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

router.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

router.get("/about", (req, res) => {
  res.render("about.ejs");
});

module.exports = router;
