const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;
const jwt = require("jsonwebtoken");
// const uuid = require("uuid/v1");
require("dotenv").config();

const studentSchema = new Schema({
  surname: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    trim: true
  },
  othername: {
    type: String,
    trim: true
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
  },
  photo: {
    type: String
  },
  description: {
    type: String,
  },
  address: {
    street: { 
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    }
  },
  guardian: {
    fullname: {
      type: String,
    },
    address: {
      type: String,
    },
    relationship: {
      type: String,
    },
    phone: {
      type: String,
    }
  },
  campusId: {
    type: ObjectId,
    ref: "Campus"
  },
  classId: {
    type: ObjectId,
    ref: "Class"
  },
  session: {
    type: String,
  },
  boardingType: {
    type: String,
  },
  createdBy: { 
    type: ObjectId,
    ref: "Admin",
  },
  updatedBy: {
    type: ObjectId,
  },
  userType: {
    type: String,
    default: "student"
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  regNo: {
    type: String,
  },
  updatedBy: Date
});


studentSchema.methods.generateToken = function() {
  const token = jwt.sign({ _id: this._id, username: this.username, email: this.email }, process.env.JWT_SECRET);
  return token;
}

const Student = mongoose.model("Student", studentSchema);

exports.Student = Student;
exports.studentSchema = studentSchema;
