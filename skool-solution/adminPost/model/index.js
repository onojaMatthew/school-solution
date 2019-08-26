const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const adminPostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  campusId: {
    type: ObjectId,
    required: true,
    ref: "Campus"
  }
});

const AdminPost = mongoose.model("AdminPost", adminPostSchema);

exports.AdminPost = AdminPost;
