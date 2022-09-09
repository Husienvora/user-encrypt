const User = require("../models/User");
const LoginandSignin = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  LoginandSignin,
};
