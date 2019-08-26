const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const setFeeSchema = new Schema({
  session: {
    type: String,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  payment_description: [
    {
      title: String,
      amount: Number
    }
  ],
  classId: [{
    type: ObjectId,
    ref: "Class",
    required: true
  }],
  student_type: [{
    type: String,
    required: true
  }],
  fee_category: {
    type: String
  },
  totalFee: {
    type: Number,
    required: true
  }
});

const SetFee = mongoose.model("SetFee", setFeeSchema);

exports.SetFee = SetFee;
