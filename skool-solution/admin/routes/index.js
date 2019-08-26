const express = require("express");
const {
  getAdmin,
  getAdminById,
  getAdmins,
  deleteAdmin,
  updateAdmin
} = require("../controller");
const { requireLogin } = require("../../middleware/auth");
const{ getUserById } = require("../../user/controllers");

const router = express.Router();

router.get("/admin", requireLogin, getAdmins);
router.get("/admin/:adminId", requireLogin, getAdmin);
router.put("/admin/:adminId", requireLogin, updateAdmin);
router.delete("/admin/:adminId", requireLogin, deleteAdmin);

router.param("adminId", getAdminById);
router.param("userId", getUserById);

module.exports = router;
