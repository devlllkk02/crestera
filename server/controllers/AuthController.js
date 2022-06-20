const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { JWT_SECRET } = require("../keys/keys");

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

  //Generating user avatar
  let avatar = `https://avatars.dicebear.com/api/initials/${
    firstName.charAt(0) + lastName.charAt(0)
  }.svg`;

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
        image: avatar,
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
            return res.json({
              message: "Successfully logged in!",
              token: token,
              user: savedUser,
            });
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

// Get Logged in User
exports.getUser = (req, res) => {
  User.findById(req.user._id)
    .then((savedUser) => {
      res.json({ user: savedUser });
    })
    .catch((error) => console.log(error));
};

//Protected
exports.protectedController = (req, res) => {
  res.send("You are viewing protected resources!");
};

//Google Auth
exports.googleAuthController = async (req, res) => {
  const { firstName, lastName, email, image } = req.body;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    const token = jwt.sign({ _id: existingUser._id }, JWT_SECRET);
    return res.json({
      message: "Successfully logged in!",
      token: token,
      user: existingUser,
    });
  } else {
    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: "",
      image: image,
    });

    const newUser = await user.save();
    const token = jwt.sign({ _id: newUser._id }, JWT_SECRET);
    return res.json({
      message: "Successfully logged in!",
      token: token,
      user: newUser,
    });
  }
};
