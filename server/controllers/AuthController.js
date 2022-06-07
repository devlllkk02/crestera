const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    return res.status(422).json({ error: "Invalid email!" });
  }

  //Checking password mismatch
  if (password != conPassword) {
    return res.status(422).json({ error: "Passwords mismatch!" });
  }

  //Checking existance of the user
  User.findOne({ email: email }).then((existingUser) => {
    if (existingUser) {
      return res.json({ error: "User alread exists!" });
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
