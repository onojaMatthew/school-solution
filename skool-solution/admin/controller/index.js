const { Admin } = require("../model");
const _ = require("lodash");

exports.getAdminById = (req, res, next, id) => {
  Admin.findById(id)
    .populate("userId", "_id name")
    .populate("campusId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.admin = data;
      next();
    });
}

exports.getAdmin = (req, res, next) => {
  return res.json(req.admin);
}

exports.getAdmins = (req, res, next) => {
  Admin.find()
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.json(err.message);
    });
}

exports.updateAdmin = (req, res, next) => {
  let admin = req.admin;
  admin = _.extend(admin, req.body);
  admin.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json(data);
  });
}

exports.deleteAdmin = (req, res, next) => {
  const admin = req.admin;
  admin.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }

    res.json({
      message: "Successfully deleted admin"
    });
  });
}