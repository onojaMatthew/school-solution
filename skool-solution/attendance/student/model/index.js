const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const studentAttendanceSchema = new Schema({
  classId: {
    type: ObjectId,
    ref: "Class",
    required: true
  },
  session: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  campusId: {
    type: ObjectId,
    ref: "Campus",
    required: true
  },
  studentId: [{
    type: ObjectId,
    ref: "Student",
    required: true
  }],
  date: {
    type: Date,
    required: true
  }
});

const StudentAttendance = mongoose.model("StudentAttendance", studentAttendanceSchema);

exports.StudentAttendance = StudentAttendance;
