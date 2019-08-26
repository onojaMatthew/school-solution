const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const staffSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  campusId: {
    type: ObjectId,
    ref: "Campus",
    required: true
  },
  postId: {
    type: ObjectId,
    ref: "AdminPost",
    required: true
  },
  photo: {
    type: String,
  },
  description: {
    type: String,
    required: true
  }
});

const Staff = mongoose.model("Staff", staffSchema);

exports.Staff = Staff;
