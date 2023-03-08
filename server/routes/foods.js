const express = require("express");
const {
  createFood,
  getFoods,
  getSingleFood,
} = require("../controllers/foodControler");
const multer = require("multer");

const router = express.Router();

// GET all foods
router.get("/", getFoods);

// GET single food
router.get("/:id", getSingleFood);


router.post("/", createFood);

module.exports = router;
