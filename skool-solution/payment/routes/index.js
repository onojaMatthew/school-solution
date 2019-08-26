const express = require("express");
const {
  createPayment,
  getPayment,
  getPaymentBy,
  getPayments,
  paymentById,
  deletePayment,
  updatePayment,
  getDebtors,
  payDebt,
} = require("../controller");
const router = express.Router();
const { requireLogin } = require("../../middleware/auth");
const { getUserById } = require("../../user/controllers");
const { isValidAccountant } = require("../../auth");

router.get("/payment", requireLogin, getPayments);
router.get("/payment/debtors", requireLogin, getDebtors);
router.get("/payment/:paymentId", requireLogin, getPayment);
router.delete("/payment/:paymentId", requireLogin, isValidAccountant, deletePayment);
// router.put("/payment/:paymentId", requireLogin, updatePayment);
router.post("/payment/new/:userId", requireLogin, isValidAccountant, createPayment);
router.get("/payment/by/:userId", requireLogin, getPaymentBy);
router.put("/payment/debt/:paymentId", requireLogin, isValidAccountant, payDebt);

router.param("userId", getUserById);
router.param("paymentId", paymentById);

module.exports = router;
