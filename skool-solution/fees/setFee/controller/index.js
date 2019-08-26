const { SetFee } = require("../model");
const _ = require("lodash");

exports.postSetFee = (req, res, next) => {
  const description = {
    title: req.body.title,
    amount: req.body.amount
  }

  let setFee = new SetFee(req.body);
  setFee.payment_description = description;
  setFee.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json(`Accountant ${req.profile.name} has successfully set new fee`);
  });
}

exports.setFeeById = (req, res, next, id) => {
  SetFee.findById(id)
    .populate("createdBy", "_id name")
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.setFee = data;
      next();
    });
} 

exports.getSetFees = (req, res, next) => {
  SetFee.find()
    .populate("createdBy", "_id name")
    .select("_id session classId term createdBy payment_description totalFee student_type fee_category")
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.getSetFee = (req, res, next) => {
  return res.json(req.setFee);
}

exports.updateSetFee = (req, res, next) => {
  let setFee = req.setFee;
  setFee = _.extend(setFee, req.body);
  setFee.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "You have successfully updated fee"
    });
  });
}

exports.deleteSetFee = (req, res, next) => {
  let setFee = req.setFee;
  setFee.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Fee successfully deleted"
    });
  });
}