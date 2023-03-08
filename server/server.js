const express = require("express");
const foodsRoutes = require("./routes/foods");
const mongoose = require("mongoose");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
const cors = require("cors")

require("dotenv").config();
const PORT = process.env.PORT || 6000;

// express app
const app = express();

// middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

app.use("/", (req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/foods", foodsRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log("listening on port 4000");
    });
  })
  .catch((error) => console.log(error));
