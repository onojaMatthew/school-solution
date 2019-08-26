const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  createdBy: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  photo: {
    type: String,
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Event = mongoose.model("Event", eventSchema);

exports.Event = Event;
