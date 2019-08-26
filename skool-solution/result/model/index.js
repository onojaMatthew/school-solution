const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Schema = mongoose.Schema;

const resultSchema = new Schema({
  student: [
    {
      studentId: {
        type: ObjectId,
        ref: "Student",
        required: true
      },
      continuousAssessment: {
        type: Number,
        required: true
      },
      test: {
        type: Number,
        required: true 
      },
      examination: {
        type: Number,
        required: true
      },
      total: {
        type: Number
      }
    }
  ],
  classId: {
    type: ObjectId,
    ref: "Class",
    required: true
  },
  subjectId: {
    type: ObjectId,
    ref: "Subject",
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
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: ObjectId,
    required: true,
    ref: "Teacher"
  }
});

const Result = mongoose.model("Result", resultSchema);

exports.Result = Result;
