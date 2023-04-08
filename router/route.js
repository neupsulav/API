const express = require("express");
const router = express.Router();

const { getData, registerUser, signin } = require("../controller/controller");

router.route("/").get(getData);

router.route("/register").post(registerUser);

router.route("/signin").post(signin);

module.exports = router;
