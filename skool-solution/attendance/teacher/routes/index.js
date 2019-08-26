const express = require("express");
const {
  createAttendance,
  findAttendance,
  getAllAttendance
} = require("../controller");
const { requireLogin } = require("../../../middleware/auth");

const router = express.Router();

router.post("/teacherattendance", requireLogin, createAttendance);
router.get("/teacherattendance", requireLogin, getAllAttendance);
router.post("/teacherattendance/by", requireLogin, findAttendance);

module.exports = router;
