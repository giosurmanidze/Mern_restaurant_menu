const Food = require("../model/foods");
const mongoose = require("mongoose");

// Get all foods
const getFoods = async (req, res) => {
  const foods = await Food.find({}).sort({ createdAt: -1 });

  res.status(200).json(foods);
};

// Get single food
const getSingleFood = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such food" });
  }

  const food = await Food.findById(id);

  if (!food) {
    return res.status(400).json({ error: "No such food" });
  }

  res.status(200).json(food);
};

// Create new food



const createFood = async (req, res) => {
  const { title, price, url, desc } = req.body;

  // add doc to db
  try {
    const food = await Food.create({
      title,
      price,
      url,
      desc,
    });

    res.status(200).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createFood,
  getFoods,
  getSingleFood,
};
