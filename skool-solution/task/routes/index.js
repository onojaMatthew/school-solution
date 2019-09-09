const express = require("express");
const { 
  fetchTasks,
  createTask, 
  deleteTask, 
  completeTask
} = require("../control");
const { requireLogin } = require("../../middleware/auth");

const router = express.Router();

router.get("/task/:userId", fetchTasks);
router.post("/task/:userType", requireLogin, createTask);
router.put("/task/:userType/complete/:taskId", requireLogin, completeTask);
router.delete("/task/:userType/:taskId", requireLogin, deleteTask);

module.exports = router;

//candidates@globalskills.io 