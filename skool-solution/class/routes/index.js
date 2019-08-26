const express = require("express");
const {
  getClass, 
  getClasses,
  createClass,
  deleteClass,
  classById,
  getClassBy,
} = require("../controllers");
const { requireLogin } = require("../../middleware/auth");
const { classValidator } = require("../../validator");
const { getUserById } = require("../../user/controllers");
const { campusById } = require("../../campus/controllers")
const { isValidAdmin } = require("../../auth");

const router = express.Router();

router.get("/class", requireLogin, getClasses);
router.post("/class/new/:userId", requireLogin, isValidAdmin, createClass, classValidator,)
router.get("/class/:classId", requireLogin, getClass);
router.get("/class/by/:userId", requireLogin, getClassBy)
router.delete("/class/:classId", requireLogin, isValidAdmin, deleteClass);

router.param("classId", classById);
router.param("userId", getUserById);
router.param("campusId", campusById);

module.exports = router;
