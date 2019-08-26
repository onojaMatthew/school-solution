const { Payment } = require("../model");
const { Student } = require("../../student/model");
const { SetFee } = require("../../fees/setFee/model");
const _ = require("lodash");

exports.createPayment = async (req, res, next) => {
  let fees;
  let student;
  await SetFee.find({ term: req.body.term, session: req.body.session, classId: req.body.classId })
    .then(fee => {
      fees = fee;
    })
  
  await Student.find({ regNo: req.body.regNo})
    .then(result => {
      student = result;
    });

  let payment = await new Payment(req.body);
  payment.studentRegNo = student[0].regNo;
  payment.surname = student[0].surname;
  payment.firstname = student[0].firstname;
  payment.othername = student[0].othername;
  payment.totalFees = fees[0].totalFee;
  payment.classId = fees[0].classId;
  payment.receivedBy = req.profile;
  payment.balance = parseInt(fees[0].totalFee) - parseInt(req.body.amountPaid);
  return await payment.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Payment was successfully",
      data
    });
  });
}

exports.payDebt = (req, res, next) => {
  if (typeof req.body.balance !== "number") {
    return res.status(400).json({
      error: "Balance must be a number"
    });
  }
  const newBalance = Number(req.body.balance);
  Payment.findOneAndUpdate(req.params.id, {
    $inc: { balance: -newBalance, amountPaid: newBalance },
  })
    .then(payment => {
      res.json(payment);
    })
    .catch(err => {
      res.status(400).json({
        error: err.message
      });
    });
}

exports.getDebtors = (req, res, next) => {
  Payment.find({ balance: { $gt: 0 } })
    .populate("classId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.paymentById = (req, res, next, id) => {
  Payment.findById(id)
    .populate("classId", "_id name")
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.payment = data;
      next();
    });
}

exports.getPayment = (req, res, next) =>  {
  return res.json(req.payment);
}

exports.getPayments = (req, res, next) => {
  Payment.find()
    .populate("classId", "_id name")
    .populate("receivedBy", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.getPaymentBy = (req, res, next) => {
  Payment.find({ receivedBy: req.params.userId})
    .populate("classId", "_id name")
    .populate("receivedBy", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.deletePayment = (req, res, next) => {
  let payment = req.payment;
  payment.remove((err, data) => {
    if (err) return res.status(400).json({
      error: err.message
    });
    res.json({
      message: "Payment deleted successfully"
    });
  });
}

exports.updatePayment = (req, res,next) => {
  let payment = req.payment;
  payment = _.extend(payment, req.body);
  payment.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Payment updated successfully"
    });
  });
}