const { TeacherAttendance } = require("../model");

exports.createAttendance = async (req, res, next) => {
  let attendance = await new TeacherAttendance(req.body);
  attendance.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Attendance submitted successfully"
    });
  });
}

exports.findAttendance = (req, res, next) => {
  const session = req.body.session;
  const term = req.body.term;
  const date = req.body.date;
  console.log(session, term, date)

  TeacherAttendance.find({ session, term, date })
    .populate("teacherId", "username fullname")
    .populate("campusId", "_id name")
    .select("teacherId campusId date session term _id")
    .exec((err, attendance) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(attendance);
    })
}

exports.getAllAttendance = (req, res, next) =>{
  TeacherAttendance.find()
    .populate("teacherId", "_id fullname username")
    .populate("campusId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    })
}