const User = require("../models/model");

const getData = async (req, res) => {
  try {
    res.status(200).send("Data outgoing");
  } catch (error) {
    res.status(400).send(error);
  }
};

const registerUser = async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).send("Please fill all the fields properly");
  }

  if (password != cpassword) {
    return res.status(422).send("Passwords doesn't match");
  }

  try {
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

module.exports = { getData, registerUser };
