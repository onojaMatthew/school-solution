const express = require("express");
const { signin, signup, signout, getUserById, deleteUser, getUser } = require("../controllers");
const { signupValidator } = require("../../validator");
const { requireLogin } = require("../../middleware/auth");
const { isValidAdmin } = require("../../auth");

const router = express.Router();

router.post("/signup/:userType", signup);
router.post("/signin/:userType", signin);
router.get("/signout", signout);
router.get("/user/:userId/:userType", requireLogin, getUser);
router.delete("/user/:userId", requireLogin, isValidAdmin, deleteUser);


router.param("userId", getUserById);

module.exports = router;
