const { Result } = require("../model");

exports.createResult = (req, res, next) => {
  const student = {
    continousAssessment: req.body.continousAssessment,
    test: req.body.test,
    examination: req.body.examination,
    total: Number(req.body.continousAssessment + req.body.continousAssessment + req.body.examination)
  }

  let result = new Result();
  result.student = student;
  result.classId = req.body.classId;
  result.term = req.body.term;
  result.session = req.body.session;
  result.createdBy = req.teacher;

  return result.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Result composition success!",
      data
    });
  });
}

exports.resultById = (req, res, next, id) => {
  Result.findById(id)
    .populate("classId", "_id name")
    .populate("subjectId", "_id name")
    .populate("createdBy", "_id fullname username")
    .populate("student.studentId", "_id firstname surname othername")
    .populate("updatedBy", "_id fullname username")
    .select("student term session classId subjectId createdBy createdAt updatedBy")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.result = data;
      next();
    });
}

exports.getResults = (req, res, next) => {
  Result.find()
    .populate("classId", "_id name")
    .populate("subjectId", "_id name")
    .populate("student.studentId", "_id firstname surname othername")
    .populate("createdBy", "_id fullname username")
    .populate("updatedBy", "_id fullname username")
    .select("student term session classId subjectId createdAt createdBy updatedBy")
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(400).json({
        error: err.message
      });
    });
}

exports.getResultBy = (req, res, next) => {
  Result.find({ createdBy: req.params.teacherId })
    .populate("classId", "_id name")
    .populate("createdBy", "_id ")
    .populate("subjectId", "_id name")
    .populate("student.studentId", "_id firstname surname othername")
    .populate("createdBy", "_id fullname username")
    .populate("updatedBy", "_id fullname surname")
    .select("student term session classId subjectId createdBy createdAt updatedBy")
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      error: err.message
    });
}

exports.getResult = (req, res, next) => {
  return res.json(req.result);
}

exports.deleteResult = (req, res, next) => {
  const result = req.result;
  result.remove()
    .then(result => {
      res.json({
        message: "Result deleted successfully"
      });
    })
    .catch(err => {
      res.status(400).json({
        error: err.message
      });
    });
}

exports.updateResult = (req, res, next) => {
  Result.findByIdAndUpdate(req.params.resultId, (err, data) => {
    if (err) return res.status(400).json({
      error: err.message
    });
    
    if (req.body.test) data.student.test = req.body.test;
    if (req.body.examination) data.student.examination = req.body.examination;
    if (req.body.continousAssessment) data.student.continousAssessment = req.body.continousAssessment;
    if (req.body.classId) data.classId = req.body.classId;
    if (req.body.subjectid) data.subjectid = req.body.subjectid;
    data.updatedBy = req.teacher;

    data.save((err, data) => {
      if (err) return res.status(400).json({
        error: err.message
      });
      res.json({
        message: "Result updated successfully",
        data
      });
    });
  });
}