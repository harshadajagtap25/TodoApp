const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
  name: {
    type: "string",
    required: true,
  },
  role: {
    type: "string",
    required: true,
    default: "user",
  },
});

const UserModel = mongoose.model("user", userSchema);
module.exports = {
  UserModel,
};
