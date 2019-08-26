const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const subjectSchema = new Schema({
  name: {
    type: String,
    createdAt: Date, default: Date.now
  },
  userId: {
    type: ObjectId,
    ref: "User",
    required: true
  }
});

const Subject = mongoose.model("Subject", subjectSchema);

exports.Subject = Subject;
exports.subjectSchema = subjectSchema;
