const express = require("express");
const {
  createReport,
  getReport,
  getReports,
  reportById,
  deleteReport,
  getReportBy,
} = require("../controller");
const { requireLogin } = require("../../middleware/auth");
const { getUserById } = require("../../user/controllers");
const { weeklyReportValidator } = require("../../validator");

const router = express.Router();

router.post("/report/new/:userId", requireLogin, weeklyReportValidator, createReport);
router.get("/report", requireLogin, getReports);
router.get("/report/by/:userId", requireLogin, getReportBy);
router.get("/report/:reportId", requireLogin, getReport);
router.delete("/report/:reportId", requireLogin, deleteReport);

router.param("reportId", reportById);
router.param("userId", getUserById);

module.exports = router;
