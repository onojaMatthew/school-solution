const { Subject } = require("../model");

exports.createSubject = async (req, res, next) => {
  const subjectExists = await Subject.findOne({ name: req.body.name });
  if (subjectExists) {
    return res.status(400).json({
      error: "Subject name already exists"
    });
  }

  let subject = await new Subject(req.body);
  subject.userId = req.profile;
  subject = await subject.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json(data);
  });
}

exports.getSubjects = (req, res, next) => {
  Subject.find()
    .populate("userId", "_id name")
    .then(subject => {
      res.json(subject);
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    });
}

exports.subjectById = (req, res, next, id) => {
  Subject.findById(id)
    .populate("userId", "_id name")
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: "Can not find subject"
        });
      }
      req.subject = data;
      next();
    });
}

exports.getSubject = (req, res, next) => {
  return res.json(req.subject);
}

exports.deleteSubject = (req, res, next)=> {
  const subject = req.subject;
  subject.remove()
  res.json({
    message: "Subject deleted successfully"
  });
}