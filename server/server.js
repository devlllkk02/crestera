//Imports
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/keys");
const PORT = process.env.PORT || 5000;

// Initialize the express app
const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.log(error));

// Listen
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
