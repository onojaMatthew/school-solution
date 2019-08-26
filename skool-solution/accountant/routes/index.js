const express = require("express");
const {
  accountById,
  getAccount,
  getAccounts,
  updateAccountant,
  deleteAccountant
} = require("../controller");
const { requireLogin } = require("../../middleware/auth");
const { getUserById } = require("../../user/controllers");
const { isValidAccountant } = require("../../auth");

const router = express.Router();

router.get("/accountant", requireLogin, getAccounts);
router.get("/accountant/:accountantId/:accountant", requireLogin, getAccount);
router.put("/accountant/:accountantId", requireLogin, updateAccountant);
router.delete("/accountant/:accountantId", requireLogin, deleteAccountant);


router.param("accountantId", accountById);
router.param("userId", getUserById);
module.exports = router;
