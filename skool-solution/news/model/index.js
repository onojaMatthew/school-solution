const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const newsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdBy: {
    type: ObjectId,
    required: true,
    ref: "Admin"
  }
});

const News = mongoose.model("News", newsSchema);

exports.News = News;
