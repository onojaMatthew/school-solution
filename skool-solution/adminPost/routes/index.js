const express = require("express");
const {
  createAdminPost,
  deleteAdminPost,
  getAdminPost,
  adminPostById,
  getAdminPosts
} = require("../controller");
const { requireLogin } = require("../../middleware/auth");
const { adminpostValidator } = require("../../validator");

const router = express.Router();

router.post("/adminpost", requireLogin, adminpostValidator, createAdminPost);
router.get("/adminpost/:adminPostId", requireLogin, getAdminPost);
router.get("/adminpost", requireLogin, getAdminPosts);
router.delete("/adminpost/:adminPostId", requireLogin, deleteAdminPost);

router.param("adminPostId", adminPostById);

module.exports = router;
