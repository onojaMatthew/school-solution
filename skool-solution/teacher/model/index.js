const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const jwt = require("jsonwebtoken");
//const uuid = require("uuid/v1");
require("dotenv").config();

const teacherSchema = new Schema({
  fullname: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  campusId: {
    type: ObjectId,
    ref: "Campus",
  },
  userType: {
    type: String,
    default: "teacher"
  },
  classId: [{
    type: ObjectId,
    ref: "Class",
  }],
  subjectId: [{
    type: ObjectId,
    ref: "Subject",
  }],
  role: {
    type: String,
    enum: ["teacher", "principal", "vice-principal", "admin"],
    default: "teacher"
  }
});

teacherSchema.methods.generateToken = function() {
  const token = jwt.sign({ _id: this._id, email: this.email, username: this.username }, process.env.JWT_SECRET);
  return token;
}

const Teacher = mongoose.model("Teacher", teacherSchema);

exports.Teacher = Teacher;
