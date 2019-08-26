const { Campus } = require("../model");
const _ = require("lodash");

exports.createCampus = async (req, res, next) => {
  const { userType } = res.locals;
  if (userType !== "admin") return res.status(403).json({
    error: "Only admin is allowed for this operation"
  });

  const campusExist = await Campus.findOne({ name: req.body.name});
  if (campusExist) {
    return res.status(400).json({
      error: "Campus aleady exists"
    });
  }

  let campus = await new Campus(req.body);
  campus.createdBy = req.profile;
  return campus.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json(data);
  })
}

exports.getCampuses = (req, res, next) => {
  const { userType } = res.locals;

  if (userType !== "admin" || userType !== "accountant" || userType !== "teacher") {
    return res.status(403).json({
      error: "You are not not authorized to perform this operation. You may consult with the admin for permission"
    });
  }

  Campus.find()
    .populate("createdBy", "_id email")
    .then(campus => {
      res.json(campus)
    })
    .catch(err => {
      res.status(400).json({ error: err })
    });
}

exports.getCampus = (req, res, next) => {
  const campus = req.campus
  return res.json(campus);
}

exports.campusById = (req, res, next, id) => {
  Campus.findById(id)
    .populate("createdBy", "_id email name")
    .exec((err, campus) => {
      if (err || !campus) {
        return res.status(400).json({
          error: "Campus does not exist"
        });
      }
      req.campus = campus;
      next();
    });
}

exports.getCampusBy = (req, res, next) => {
  Campus.find({ createdBy: req.profile._id })
    .populate("createdBy", "_id name email")
    .sort("_createdAt")
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: "Campus not found"
        });
      }
      res.json(data);
    });
}

exports.updateCampus = (req, res, next) => {
  const { userType } = res.locals;

  if (userType !== "admin") return res.status(403).json({
    error: "You don't permission to update this information"
  });

  let campus = req.campus;
  campus = _.extend(campus, req.body);
  campus.updatedAt = Date.now();
  campus.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err
      })
    }
    res.json({ message: "Campus updated successfully"})
  })
}

exports.deleteCampus = (req, res, next) => {
  const { userType } = res.locals;

  if (userType !== "admin") return res.status(403).json({
    error: "You don't have permission to delete this information"
  })
  const campus = req.campus
  campus.remove((err) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json({ message: "Successfully deleted campus"});
  });
}
