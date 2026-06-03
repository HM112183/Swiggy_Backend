const express = require("express");

const restaurants = require("../data/restaurants");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(restaurants);
});

module.exports = router;