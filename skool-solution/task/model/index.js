const mongoose = require("mongoose");

const { ObjectId, Schema } = mongoose;

const taskSchema = new Schema({
  task: { type: String, required: true },
  complete: { type: Boolean, default: false },
  createdBy: { type: ObjectId, ref: "Admin", required: true }
});

const Task = mongoose.model("Task", taskSchema);

exports.Task = Task;