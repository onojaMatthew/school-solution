const { StudentAttendance } = require("../model");

exports.createAttendance = async (req, res, next) => {
  let attendance = await new StudentAttendance(req.body);
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

  StudentAttendance.find({ session, term, date })
    .populate("studentId", "_id firstname surname othername")
    .populate("campusId", "_id name")
    .populate("classId", "_id name")
    .select("studentId classId campusId date session term _id")
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
  StudentAttendance.find()
    .populate("studentId", "_id firstname othername surname")
    .populate("campusId", "_id name")
    .populate("classId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    })
}