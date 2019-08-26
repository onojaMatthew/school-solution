const express = require("express");
const {
  postSetFee,
  getSetFee,
  getSetFees,
  setFeeById,
  updateSetFee,
  deleteSetFee
} = require("../controller");
const { requireLogin } = require("../../../middleware/auth");
const { getUserById } = require("../../../user/controllers");
const {  isValidAdmin } = require("../../../auth");

const router = express.Router();

router.post("/setfee/new/:userId", requireLogin, isValidAdmin, postSetFee);
router.get("/setfee", requireLogin, isValidAdmin, getSetFees);
router.get("/setfee/:setfeeId", requireLogin, isValidAdmin, getSetFee);
router.put("/setfee/:setfeeId", requireLogin, isValidAdmin, updateSetFee);
router.delete("/setfee/:setfeeId", requireLogin, isValidAdmin, deleteSetFee);

router.param("userId", getUserById);
router.param("setfeeId", setFeeById);

module.exports = router;
