const { Router } = require("express");
const pageRoutes = require("./PageRoutes/index");

const router = Router();

router.use("/", pageRoutes);

router.use("/api", (req, res) => {
  res.send("Welcome to the API route");
});

module.exports = router;
