// ------ Note Controller  ------
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

//Modles
const Note = mongoose.model("Note");
const Board = mongoose.model("Board");
