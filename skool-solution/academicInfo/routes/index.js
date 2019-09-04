const express = require("express");
const { create, update, fetch } = require("../controller");
const { requireLogin } = require("../../middleware/auth");


const router = express.Router();

router.get("/get", fetch);
router.post("/create", requireLogin, create);
router.put("/update", requireLogin, update);

module.exports = router;