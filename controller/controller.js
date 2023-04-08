const User = require("../models/model");

const getData = async (req, res) => {
  try {
    res.status(200).send("API is currently working");
  } catch (error) {
    res.status(400).send(error);
  }
};

// user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
      return res.status(400).send("Please fill all the fields properly");
    }

    if (password != cpassword) {
      return res.status(422).send("Passwords doesn't match");
    }

    const ifEmailExist = await User.findOne({ email: email });

    if (ifEmailExist) {
      return res.status(422).send("User already exist");
    }

    const newUser = await User({
      name: name,
      email: email,
      phone: phone,
      work: work,
      password: password,
      cpassword: cpassword,
    });

    const saveUser = await newUser.save();

    if (saveUser) {
      return res.status(200).send("User created successfully");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//user login
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Please fill all the fields properly");
    }

    const loginUser = await User.findOne({ email: email });

    if (loginUser) {
      res.status(200).send("User login successfully");
    } else {
      res.status(404).send("Invalid user credentials");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getData, registerUser, signin };
