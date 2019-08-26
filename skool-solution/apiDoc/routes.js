const express = require("express");
const { apiDocumentation } = require("./index");

const router = express.Router();

router.get("/apis", apiDocumentation);

module.exports = router;
