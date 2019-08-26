const express = require("express");
const {
  createEvent,
  eventById,
  getEvent,
  getEvents,
  updateEvent,
  deleteEvent
} = require("../controller");
const { getUserById } = require("../../user/controllers");
const { requireLogin } = require("../../middleware/auth");

const router = express.Router();

router.post("/event/new/:userId", requireLogin, createEvent);
router.get("/event", getEvents);
router.get("/event/:eventId", getEvent);
router.put("/event/:eventId", requireLogin, updateEvent);
router.delete("/event/:eventId", requireLogin, deleteEvent);

router.param("eventId", eventById);
router.param("userId", getUserById);

module.exports = router;
