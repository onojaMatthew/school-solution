const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const paymentSchema = new Schema({
  studentRegNo: {
    type: String,
    required: true
  },
  session: {
    type: String,
    required: true
  },
  classId: {
    type: ObjectId,
    ref: "Class",
    required: true
  },
  totalFees: {
    type: Number,
    required: true
  },
  term: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  othername: {
    type: String
  },
  tellerNumber: {
    type: String,
    required: true
  },
  modeOfPayment: {
    type: String,
    required: true
  },
  receivedBy: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  amountPaid: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

exports.Payment = Payment;
