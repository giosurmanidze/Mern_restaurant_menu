const express = require("express");
const { createFood, getFoods, getSingleFood } = require("../controllers/foodControler");

const router = express.Router();

// GET all foods
router.get("/", getFoods);

// GET single food
router.get("/:id", getSingleFood);

// POST new food
router.post("/", createFood);

module.exports = router;
