const express = require("express");
const {
  createFood,
  getFoods,
  getSingleFood,
  deleteFood
} = require("../controllers/foodControler");

const router = express.Router();

// GET all foods
router.get("/", getFoods);

// GET single food
router.get("/:id", getSingleFood);


router.post("/", createFood);

router.delete("/:id", deleteFood)

module.exports = router;
