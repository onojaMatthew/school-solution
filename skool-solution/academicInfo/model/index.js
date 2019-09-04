const mongoose = require("mongoose");
const { Schema } = mongoose;

const academicSchema = new Schema({
  session: { type: String },
  term: { type: String }
});

const Academic = mongoose.model("Academic", academicSchema);

exports.Academic = Academic;