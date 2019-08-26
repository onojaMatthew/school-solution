const express = require("express");
const {
  createAttendance,
  findAttendance,
  getAllAttendance
} = require("../controller");
const { requireLogin } = require("../../../middleware/auth");

const router = express.Router();

router.post("/studentattendance", requireLogin, createAttendance);
router.get("/studentattendance", requireLogin, getAllAttendance);
router.post("/studentattendance/by", requireLogin, findAttendance);

module.exports = router;
