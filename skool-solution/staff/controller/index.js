const { Staff } = require("../model");
const _ = require("lodash");

exports.createStaff = async (req, res, next) => {
  let staff = await new Staff(req.body);
  // staff.photo = req.file.path;
  staff.postId = req.body.postId;

  return await staff.save((err, data) => {
    if (err) {
      return res.status(err).json({
        error: err.message
      });
    }
    res.json({ message: "New staff successfully added"});
  });
}

exports.staffById = (req, res, next, id) => {
  Staff.findById(id)
    .populate("postId", "_id name")
    .populate("campusId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.staff = data;
      next();
    });
}

exports.getStaff = (req, res, next) => {
  return res.json(req.staff);
}

exports.getAllStaff = (req, res, next) => {
  Staff.find()
    .populate("campusId", "_id name")
    .populate("postId", "_id title")  
    .then(staff => {
      res.json(staff);
    })
    .catch(err => {
      res.json(err.message);
    });
}

exports.updateStaff = (req, res, next) => {
  let staff = req.staff;
  staff = _.extend(staff, req.body);
  return staff.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json(data);
  });
}

exports.updatePhoto = (req, res, next) => {
  Staff.findByIdAndUpdate(req.params.staffId)
    .then(staff => {
      if (!staff) {
        return res.status(404).json({
          error: "Can not find staff"
        });
      }
      staff.photo = req.file.path;
      return staff.save();
    })
    .catch(err => {
      res.status(400).json({
        error: err.message
      });
    });
}

exports.deleteStaff = (req, res, next) => {
  const staff = req.staff;
  staff.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Successfully deleted staff"
    });
  });
}
