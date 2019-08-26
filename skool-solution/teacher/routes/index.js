const express = require("express");
const {
  createTeacher,
  getTeacher,
  getTeachers,
  teacherById,
  updateTeacher,
  deleteTeacher,
  getTeacherByCampus,
} = require("../controller");
const { requireLogin } = require("../../middleware/auth");
const { getUserById } = require("../../user/controllers");

const router = express.Router();

router.get("/teacher", requireLogin, getTeachers);
router.get("/teacher/:teacherId/teacher", requireLogin, getTeacher);
router.get("/bycampus/:campusId", requireLogin, getTeacherByCampus);
router.put("/teacher/:userId", requireLogin, createTeacher);
router.delete("/teacher/:teacherId", requireLogin, deleteTeacher);
router.patch("/teacher/:teacherId", requireLogin, updateTeacher);

router.param("teacherId", teacherById);
router.param("userId", getUserById);


module.exports = router;
