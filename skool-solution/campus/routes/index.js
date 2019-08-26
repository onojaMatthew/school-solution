const express = require("express");
const { 
  getCampus,
  getCampusBy,
  createCampus,
  deleteCampus,
  updateCampus,
  getCampusById,
  getCampuses,
  campusById
} = require("../controllers");
const { requireLogin } = require("../../middleware/auth");
const { campusValidator } = require("../../validator");
const { getUserById } = require("../../user/controllers");
const { isValidAdmin } = require("../../auth");

const router = express.Router();

router.get("/campus", requireLogin, getCampuses);
router.post("/campus/new/:userById", requireLogin, isValidAdmin, createCampus, campusValidator,)
router.get("/campus/:campusId", requireLogin, isValidAdmin, getCampus);
router.get("/campus/by/:userById", requireLogin, isValidAdmin, getCampusBy);
router.put("/campus/:campusId", requireLogin, isValidAdmin, updateCampus, campusValidator,);
router.delete("/campus/:campusId", requireLogin, isValidAdmin, deleteCampus);

router.param("campusId", campusById);
router.param("userById", getUserById);

module.exports = router;
