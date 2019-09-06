const { Academic } = require("../model");

// Fetch academic information
exports.fetch = (req, res) => {
  Academic.find({}).exec((err, data) => {
    if (err || !data) return res.status(400).json({
      error: "Can not fetch academic information"
    });
    res.json(data);
  });
}

// Create new academic information
exports.create = async (req, res) => {
  const { term, session, userId } = req.body;
  const { userType } = req.params;
  const { user: { _id } } = req;

  if (userType !== "admin") return res.status(400).json({ error: "Only the admin can perform this operation" });
  if (_id !== userId) return res.status(400).json({ error: "You have no access" });

  let academic = new Academic({
    term,
    session,
  });
  academic = await academic.save();
  res.json(academic);
}

// Updates academic information
exports.update = (req, res) => {
  const { term, session, userId } = req.body;
  const { userType } = req.params;
  const { user: { _id } } = req;
  if (userType !== "admin") return res.status(400).json({ error: "Only the admin can perform this operation" });
  if (_id !== userId) return res.status(400).json({ error: "You have no access" });
  const academic = new Academic();
  if (term) academic.term = term;
  if (session) academic.session = session;
  return academic.save((err, data) => {
    if (err) return res.status(400).json({ error: "Something went wrong. Please try again" });
    res.json(data);
  });
}