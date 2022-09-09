const express = require("express");
const router = express.Router();

const { LoginandSignin } = require("../controllers/LoginandSignin");

router.route("/Login").post(LoginandSignin);

module.exports = router;
