const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
  },
  password: {
    type: String,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
