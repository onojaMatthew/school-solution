const express = require("express");
const {
  createStaff,
  getAllStaff,
  getStaff,
  staffById,
  updatePhoto,
  updateStaff,
  deleteStaff
} = require("../controller");
const { requireLogin } = require("../../middleware/auth");
const { getUserById } = require("../../user/controllers");
const { isValidAdmin } = require("../../auth");


const router = express.Router();

router.post("/staff/new/:userId", requireLogin, isValidAdmin, createStaff);
router.get("/staff", requireLogin, getAllStaff);
router.put("/staff/:staffId/photo", requireLogin, isValidAdmin, updatePhoto);
router.get("/staff/:staffId", getStaff);
router.put("/staff/:staffId", requireLogin, isValidAdmin, updateStaff);
router.delete("/staff/:staffId", requireLogin, isValidAdmin, deleteStaff);

router.param("staffId", staffById);
router.param("userId", getUserById);

module.exports = router;
