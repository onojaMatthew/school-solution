const express = require("express");
const {
  getResult,
  getResultBy,
  getResults,
  createResult,
  updateResult,
  deleteResult,
  resultById
} = require("../controller");
const { teacherById } = require("../../teacher/controller");
const { requireLogin } = require("../../middleware/auth");
const { isValidTeacher, isValidAdmin } = require("../../auth");

const router = express.Router();

router.post("/result/new", requireLogin, isValidTeacher, createResult);
router.get("/result", requireLogin, getResults);
router.get("/result/:resultId", requireLogin, getResult);
router.get("/result/by/:teacherId", requireLogin, getResultBy);
router.put("/result/:resultId", requireLogin, isValidTeacher, updateResult);
router.delete("/result/:resultId", requireLogin, isValidAdmin, deleteResult);

router.param("resultId", resultById);
router.param("teacherId", teacherById);

module.exports = router;
