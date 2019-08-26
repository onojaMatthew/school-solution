const { Accountant } = require("../model");
const _ = require("lodash");

exports.accountById = (req, res, next, id) => {
  Accountant.findById(id)
    .populate("campusId", "_id name")
    .select("_id fullname username campusId createdAt")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.accountant = data;
      next();
    });
}

exports.getAccounts = (req, res, next) => {
  Accountant.find()
    .populate("campusId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.getAccount = (req, res, next)  => {
  return res.json(req.accountant);
}

exports.deleteAccountant = (req, res, next)=> {
  let accountant = req.accountant;
  accountant.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Accountant was successfully deleted"
    });
  });
}

exports.updateAccountant = (req, res, next) => {
  let accountant = req.accountant;
  accountant = _.extend(accountant, req.body);
  accountant.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Accountant's information updated successfully"
    });
  });
}