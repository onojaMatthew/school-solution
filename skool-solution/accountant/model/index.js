const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const jwt = require("jsonwebtoken");
require("dotenv").config();

const accountantSchema = new Schema({
  fullname: {
    type: String,
  },
  campusId: {
    type: ObjectId,
    ref: "Campus",
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
  },
  userType: {
    type: String,
    default: "accountant"
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

accountantSchema.methods.generateToken = function() {
  const token = jwt.sign({ _id: this._id, username: this.username, email: this.email }, process.env.JWT_SECRET);
  return token;
}

const Accountant = mongoose.model("Account", accountantSchema);

exports.Accountant = Accountant;
