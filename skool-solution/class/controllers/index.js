const { Class } = require("../model");

exports.createClass = async (req, res, next) => {
  const { userType } = res.locals;
  if (userType !== "admin") return res.status(403).json({
    error: "You don't have authorization to create this information"
  });

  const classExists = await Class.findOne({ name: req.body.name });
  if (classExists) {
    return res.status(400).json({
      error: "Class name already exist"
    });
  }

  let newClass = await new Class(req.body);
  newClass.campusId = req.body.campusId;
  newClass.createdBy = req.profile;
  
  return await newClass.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json(data);
  });
}

exports.getClassBy = (req, res, next) => {
  Class.find({ createdBy: req.profile._id})
    .populate("createdBy", "_id name")
    .populate("campusId", "_id name createdBy")
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(data);
    });
}

exports.classById = (req, res, next, id) => {
  Class.findById(id)
    .populate("createdBy", "_id name email")
    .populate("campusId", "_id name")
    .exec((err, data) => {
      if (err || !data) {
        console.log(err)
        return res.status(400).json({
          error: "Class name does not exist"
        });
      }
      req.class = data;
      next();
    });
}

exports.getClass = (req, res, next) => {
  return res.json(req.class);
}

exports.getClasses = (req, res, next) => {
  Class.find()
    .populate("createdBy", "_id name email")
    .populate("campusId", "_id name")
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: err
        });
      }
  
      res.json(data);
    })
}

exports.deleteClass = (req, res, next) => {
  const { userType } = res.locals;

  if (userType !== "admin") return res.status(403).json({
    error: "You don't have authorization to delete this information"
  });
  
  dclass.remove()
    .then(result => {
      res.json("Successfully deleted class")
    })
    .catch(err => {
      res.json({
        error: err
      });
    });
}
