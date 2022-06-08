const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const User = mongoose.model("User");

// Signup
exports.signupController = (req, res) => {
  const { firstName, lastName, email, password, conPassword } = req.body;

  //Checking Empty Fields
  if (!firstName || !lastName || !email || !password || !conPassword) {
    return res.status(422).json({ error: "Please enter all the fields!" });
  }

  //Checking the email format
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return res.status(422).json({ error: "Invalid email format!" });
  }

  //Checking password mismatch
  if (password != conPassword) {
    return res.status(422).json({ error: "Passwords mismatch!" });
  }

  //Checking existance of the user
  User.findOne({ email: email }).then((existingUser) => {
    if (existingUser) {
      return res.json({ error: "User already exists!" });
    }

    //Hashing the password
    bcrypt.hash(password, 12).then((hashedPassword) => {
      // Saving user in database
      const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      });

      user
        .save()
        .then((user) => {
          res.json({ message: "User saved succesfully!" });
        })
        .catch((error) => console.log(error));
    });
  });
};

// Login
exports.loginController = (req, res) => {
  const { email, password } = req.body;

  //Checking Empty Fields
  if (!email || !password) {
    return res.status(422).json({ error: "Please enter all the fields!" });
  }

  //Checking the email format
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return res.status(422).json({ error: "Invalid email format!" });
  }

  //Checking the existance of a user with the provided email
  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res
          .status(422)
          .json({ error: "Please enter valid email or password!" });
      }

      bcrypt
        .compare(password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
            return res.json(token);
          } else {
            return res
              .status(422)
              .json({ error: "Please enter valid email or password!" });
          }
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
};

//Protected
exports.protectedController = (req, res) => {
  res.send("You are viewing protected resources!");
};
