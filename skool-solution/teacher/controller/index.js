const { Teacher } = require("../model");
const _ = require("lodash");

exports.createTeacher = async (req, res, next) => {
  const isExist = await Teacher.findOne({ username: req.body.username });
  if (isExist) return res.status(400).json({
    error: "Username already taken"
  });

  let teacher = await new Teacher(req.body);

  teacher.subjectId = req.body.subjectId;
  teacher.campusId = req.body.campusId;
  teacher.classId = req.body.classId
  return await teacher.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json(data);
  });
}

exports.getTeacherByCampus = (req, res, next) => {
  console.log(req.params.campusId)
  Teacher.find({ campusId: req.params.campusId })
    .select("_id fullname username")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    })
}

exports.teacherById = (req, res, next, id) => {
  Teacher.findById(id)
    .populate("classId", "_id name")
    .populate("subjectId", "_id name")
    .populate("campusId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.teacher = data;
      next();
  });
}

exports.getTeacher = (req, res, next) => {
  res.json(req.teacher);
}

exports.getTeachers = (req, res, next) => {
  Teacher.find()
    .populate("campusId", "_id name")
    .populate("classId", "_id name")
    .populate("subjectId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.updateTeacher = (req, res, next) => {
  let teacher = req.teacher;
  teacher = _.extend(teacher, req.body);
  return teacher.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json(data);
  })
}

exports.deleteTeacher = (req, res, next) => {
  let teacher = req.teacher;
  teacher.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Successfully deleted teacher"
    });
  });
}