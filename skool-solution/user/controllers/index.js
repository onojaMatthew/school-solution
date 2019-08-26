// const { User } = require("../models/user");
const { Admin } = require("../../admin/model");
const { Teacher } = require("../../teacher/model");
const { Student } = require("../../student/model");
const { Accountant } = require("../../accountant/model");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

require("dotenv").config();

exports.signup = async (req, res, next) => {
  let User = null;
  const { userType } = req.params;
  console.log(req.body)
  const { email, username, password } = req.body.data;
  console.log(req.body)
  if (!req.params) return res.status(400).json({
    error: "Authentication failed: Invalid request parameters"
  });
  console.log(email, username, password)
  if (!email || !password || !username) return res.status(400).json({
    error: "Request should have email and password"
  });

  switch(userType) {
    case "accountant":
      User = Accountant;
      break;
    case "admin":
      User = Admin;
      break;
    case "student":
      User = Student;
      break;
    case "teacher":
      User = Teacher;
      break;
    default: res.status(403).json({
      error: "Unknown user type"
    });
  }

  User.findOne({ email, username }, (err, user) => {
    if (err) return res.status(400).json({ error: err.message });
    if (user) return res.status(400).json({ error: "User already exist" });
    return bcrypt.hash(password, 12)
      .then(hashedPassword => {
      if (!hashedPassword) return res.status(400).json({ error: err.message });
      const user = new User({
        email,
        password: hashedPassword,
        username
      });
      user.save();
      const token = user.generateToken();
      res.header("x-auth-token", token).json({ message: "User successfully created", user });
    });
  });
}

exports.signin = (req, res, next) => {
  let User = null;
  const { email, password } = req.body;
  const { userType } = req.params;

  if (!email || !password) return res.status(401).json({
    error: "Request should have email and password"
  });

  if (!userType) return res.status(403).json({
    error: "Authorization failed: Invalid user type"
  });

  switch(userType) {
    case "accountant":
      User = Accountant;
      break;
    case "admin":
      User = Admin;
      break;
    case "student":
      User = Student;
      break;
    case "teacher":
      User = Teacher;
      break;
    default: res.status(401).json({
      error: "Unknown user type"
    });
  }

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: `User with the email ${email} does not exist`
      });
    }
    return bcrypt.compare(password, user.password)
      .then(isMatch => {
        if (!isMatch) return res.status(400).json({
          error: "Password do not match"
        });
        const { _id, email, username, name, userType } = user;
        const token = user.generateToken();
        res.cookie("token", token);
        res.json({ token, user: { _id, email, username, name, userType } });
      });
  });
}

exports.signout = (req, res, next) => {
  res.clearCookie("token");
  res.json({ message: "You have successfully logged out!"});
}

exports.getUserById = (req, res, next, id) => {
  let User = null;
  const { userType } = req.params;
  if (!req.params) return res.status(403).json({
    error: "Request should have request parameters"
  });

  switch(userType) {
    case "accountant":
      User = Accountant;
      break;
    case "admin":
      User = Admin;
      break;
    case "student":
      User = Student;
      break;
    case "teacher":
      User = Teacher;
      break;
    default: res.status(401).json({
      error: "Unknown user type"
    }); 
  }

  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User not found"
      });
    }

    req.profile = user;
    next();
  });
}

exports.getUser = (req, res, next) => {
  let profile = req.profile;
  profile.hash_password = undefined;
  profile.salt = undefined;
  return res.json(profile);
}

exports.deleteUser = (req, res, next) => {
  let deletedUser = req.profile;
  deletedUser.remove();
  res.json({ message: "User successfully deleted" });
}
