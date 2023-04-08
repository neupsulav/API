const express = require("express");
const router = express.Router();

const { getData, registerUser } = require("../controller/controller");

router.route("/").get(getData);

router.route("/register").post(registerUser);

module.exports = router;
