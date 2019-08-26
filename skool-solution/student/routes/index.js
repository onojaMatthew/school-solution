const express = require("express");
const {
  getStudentBy,
  getStudents,
  studentById,
  updateStudent,
  deleteStudent,
  getStudent,
  getByCampusAndClass,
  modifyStudent
} = require("../controller");
const { requireLogin } = require("../../middleware/auth");
const { getUserById } = require("../../user/controllers")
const router = express.Router();

router.put("/student/:userId", requireLogin, updateStudent);
router.get("/student", requireLogin, getStudents);
router.get("/student/by/:userId", requireLogin, getStudentBy);
router.post("/student/by/campusId/classId", requireLogin, getByCampusAndClass);
router.get("/student/:studentId", requireLogin, getStudent);
router.patch("/student/:studentId/:student", requireLogin, modifyStudent);
router.delete("/student/:studentId", requireLogin, deleteStudent);

router.param("studentId", studentById);
router.param("userId", getUserById);

module.exports = router;
