const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const teacherAttendanceSchema = new Schema({
  teacherId: [{
    type: ObjectId,
    ref: "Teacher",
    required: true
  }],
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
  date: {
    type: Date,
    required: true
  }
});

const TeacherAttendance = mongoose.model("TeacherAttendance", teacherAttendanceSchema);

exports.TeacherAttendance = TeacherAttendance;
