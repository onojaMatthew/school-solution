const express = require("express");
const { create, update, fetch } = require("../controller");
const { requireLogin } = require("../../middleware/auth");


const router = express.Router();

router.get("/get", fetch);
router.post("/create/:userType", requireLogin, create);
router.put("/update/:userType", requireLogin, update);

module.exports = router;