const express = require("express");
const services = require("../data/servicesData");
const foodCategories = require("../data/foodCategories");
const groceryCategories = require("../data/groceryCategories");
const dineoutRestaurants = require("../data/dineoutRestaurants");
const appBanner = require("../data/appBanner");
const citiesData = require("../data/citiesData");

const router = express.Router();

router.get("/hero", (req, res) => {
  res.json({
    heading:
      "Order food & groceries. Discover best restaurants. Swiggy it!",
    leftImage: "/hero/left.png",
    rightImage: "/hero/right.png",
  });
});

router.get("/services", (req, res) => {
  res.json(services);
});
router.get("/food-categories", (req, res) => {
  res.json(foodCategories);
});
router.get("/grocery-categories", (req, res) => {
  res.json(groceryCategories);
});
router.get("/dineout-restaurants", (req, res) => {
  res.json(dineoutRestaurants);
});
router.get("/app-banner", (req, res) => {
  res.json(appBanner);
});
router.get("/cities", (req, res) => {
  res.json(citiesData);
});

module.exports = router;