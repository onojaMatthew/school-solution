const { Student } = require("../model");
const _ = require("lodash");

exports.updateStudent = async (req, res, next) => {
  let student = await new Student(req.body);
  // student.photo = req.file.path;
  
  student.campusId = req.body.campusId;
  student.classId = req.body.classId;
  student.createdBy = req.profile;

  student = await student.save()
  return res.json(student);
}

exports.getStudents = (req, res, next) => {
  Student.find()
    .populate("campusId", "_id name")
    .populate("classId", "_id name")
    .populate("createdBy", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.studentById = (req, res, next, id) => {
  Student.findById(id)
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: "Can not find student"
        });
      }
      req.student = data;
      next();
    });
}

exports.getStudent = (req, res, next) => {
  return res.json(req.student);
}

exports.getStudentBy = (req, res, next) => {
  Student.find({ createdBy: req.profile._id })
    .populate("createdBy", "_id name email")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err
        });
      }
      res.json(data);
    });
}

exports.getByCampusAndClass = (req, res, next) => {
  console.log(req.body);
  const campusId = req.body.campusId;
  const className = req.body.classId;

  Student.find({ campusId: campusId, classId: className })
    .populate("classId", "_id name")
    .select("_id firstname surname othername gender classId")
    .then(student => {
      res.json(student);
    })
    .catch(err => {
      res.status(400).json({
        error: err.message
      });
    });
}

exports.modifyStudent = (req, res, next) => {
  let student = req.student;
  student = _.extend(student, req.body);
  student.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json(data);
  });
}

exports.deleteStudent = (req, res, next) => {
  let student = req.student;
  student.remove();
  res.json({
    message: "Successfully deleted student"
  })
}

// {
// 	"surname": "Onoja",
// 	"firstname": "Matthew",
// 	"othername": "Igoche",
// 	"address.street": "1 Owukpa Street",
// 	"address.city": "Otukpo",
// 	"address.state": "Benue",
// 	"address.country": "Nigeria",
// 	"dob": "2019/04/28",
// 	"gender": "Male",
// 	"guardian.fullname": "Anthony Onoja",
// 	"guardian.address": "49, Ukpoju Avenue Otukpo, Benue State",
// 	"campus": "5cc5583e7a5ee405df0e02da",
// 	"guardian.relationship": "Father",
// 	"guardian.phone": "08044672482",
// 	"class": "5cc6122335117c037d7b877f",
// 	"session": "2018/2019",
// 	"boardingType": "Day school",
// 	"story": "This is about the health and security of the student"
// }

// SSD36788