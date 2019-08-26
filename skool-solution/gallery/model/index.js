const mongoose =  require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const gallerySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photo: {
    type: String
  },
  createdBy: {
    type: ObjectId,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Gallery = mongoose.model("Gallery", gallerySchema);

exports.Gallery = Gallery;
