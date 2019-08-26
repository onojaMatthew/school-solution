const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;

const campusSchema = new Schema({
  name: { 
    type: String, 
    required: true, 
  },
  createdBy: { type: ObjectId, ref: "User" },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: Date
});

const Campus = mongoose.model("Campus", campusSchema);

exports.Campus = Campus;
