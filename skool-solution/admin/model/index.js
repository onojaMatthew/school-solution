const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const jwt = require("jsonwebtoken");
// const uuid = require("uuid/v1");
require("dotenv").config();

const adminSchema = new Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    default: "admin"
  },
  campusId: {
    type: ObjectId,
    ref: "Campus"
  },
  role: {
    type: String,
    default: "support",
    enum: ["subadmin", "superadmin", "support"]
  }
});

adminSchema.methods.generateToken = function() {
  const token = jwt.sign({ _id: this._id, email: this.email, username: this.username }, process.env.JWT_SECRET);
  return token;
}

const Admin = mongoose.model("Admin", adminSchema);

exports.Admin = Admin;
