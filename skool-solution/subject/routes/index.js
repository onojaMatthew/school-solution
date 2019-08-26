const express = require("express");
const {
  createSubject,
  getSubjects,
  getSubject,
  deleteSubject,
  subjectById
} = require("../controller");
const { requireLogin } = require("../../middleware/auth");
const { subjectValidator } = require("../../validator");
const { getUserById } = require("../../user/controllers");
const { isValidAdmin } = require("../../auth");
 
const router = express.Router();

router.post("/subject/new/:userId", requireLogin, isValidAdmin, subjectValidator, createSubject);
router.get("/subject", requireLogin, getSubjects);
router.get("/subject/:subjectId", getSubject);
router.delete("/subject/:subjectId", requireLogin, isValidAdmin, deleteSubject);

router.param("subjectId", subjectById);
router.param("userId", getUserById);

module.exports = router;
