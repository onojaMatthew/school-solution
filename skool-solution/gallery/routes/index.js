const express = require("express");
const {
  createGallery,
  galleryById,
  getGalleries,
  getGallery,
  updateGallery,
  deletePhoto,
} = require("../controller");
const { getUserById } = require("../../user/controllers");;
const { requireLogin } = require("../../middleware/auth");
const { isValidAdmin } = require("../../auth");

const router = express.Router();

router.post("/gallery/new/userId", requireLogin, isValidAdmin, createGallery);
router.get("/gallery", getGalleries);
router.get("/gallery/:galleryId", getGallery);
router.put("/gallery/:galleryId", requireLogin, isValidAdmin, updateGallery);
router.delete("/gallery/:galleryId", requireLogin, isValidAdmin, deletePhoto);

router.param("userId", getUserById);
router.param("galleryId", galleryById);

module.exports = router;
