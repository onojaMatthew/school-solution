const express = require("express");
const {
  createNews,
  newsById,
  getAllNews,
  getNews,
  updateNews,
  deleteNews,
} = require("../controller");
const { getUserById } = require("../../user/controllers");;
const { requireLogin } = require("../../middleware/auth");
const { isValidAdmin } = require("../../auth");

const router = express.Router();

router.post("/news/new/:userId", requireLogin, isValidAdmin, createNews);
router.get("/news", getAllNews);
router.get("/news/:newsId", getNews);
router.put("/news/:newsId", requireLogin, isValidAdmin, updateNews);
router.delete("/news/:newsId", requireLogin, isValidAdmin, deleteNews);

router.param("userId", getUserById);
router.param("newsId", newsById);

module.exports = router;
