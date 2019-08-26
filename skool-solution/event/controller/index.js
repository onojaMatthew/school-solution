const { Event } = require("../model");
const _ = require("lodash");


exports.createEvent = (req, res, next) => {
  const { userType } = res.locals;

  if (userType !== "admin") return res.status(403).json({
    error: `Only admin can create this information not ${userType}`
  });

  let event = new Event(req.body);
  event.createdBy = req.profile;
  return event.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Event successfully created"
    });
  });
}

exports.eventById = (req, res, next, id) => {
  Event.findById(id)
    .populate("createdBy", "_id name")
    .select("_id description title time date createdBy")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.event = data;
      next();
    });
}

exports.getEvents = (req, res, next) => {
  Event.find()
    .populate("createdBy", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data)
    });
}

exports.getEvent = (req, res, next) => {
  return res.json(req.event);
}

exports.updateEvent = (req, res, next) => {
  const { userType } = res.locals;

  if (userType !== "admin") return res.status(403).json({
    error: "You don't have authorization to update this information"
  });
  let event = req.event;
  event = _.extend(event, req.body);
  event.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Event updated successfully"
    });
  });
}

exports.deleteEvent = (req, res, next) => {
  const { userType } = res.locals;
  if (userType !== "admin") return res.status(403).json({
    error: `User ${userType} does not have authorization to delete this event information`
  });
  let event = req.event;
  event.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Event deleted successfully"
    });
  });
}
