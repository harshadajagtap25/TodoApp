const { UserModel } = require("../models/user.model");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.SECRET_KEY || "qwerty";

const { Router } = require("express");
const userController = Router();

// http://localhost:8080/user/signup
userController.post("/signup", async (req, res) => {
  let { email, password, name, role } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).send({ error: false, msg: "User Already exist" });
  }
  bcrypt
    .hash(password, 5)
    .then(async (hash) => {
      const user = new UserModel({ email, password: hash, name, role });
      await user.save();
      res.status(200).send({ error: false, msg: "User created successfully" });
    })
    .catch((err) => res.status(200).send({ error: true, msg: "Try again" }));
});

// http://localhost:8080/user/login
userController.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await UserModel.findOne({ email });

  if (!user) {
    return res.status(200).send({ error: true, msg: "Invalid Username" });
  }
  let hash = user.password;

  bcrypt.compare(password, hash, (err, result) => {
    if (result) {
      let token = jwt.sign({ userId: user._id }, SECRET_KEY);
      res.status(200).send({
        error: false,
        token: token,
      });
    } else
      res.status(200).send({
        error: true,
        msg: "Invalid login credentials",
      });
  });
});

// http://localhost:8080/user/users/h@gmail.com
userController.get("/users/:email", async (req, res) => {
  const email = req.params.email;
  const result = await UserModel.find({ email: email });
  res.status(200).send({ data: result });
});

module.exports = { userController };
