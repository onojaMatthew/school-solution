const { AdminPost } = require("../model");

exports.createAdminPost = async (req, res, next) => {
  let isExist = await AdminPost.findOne({ title: req.body.title });

  if (isExist) {
    return res.status(400).json({
      error: err.message
    });
  }

  let adminPost = await new AdminPost(req.body);
  adminPost.campusId = req.body.campusId;
  return adminPost.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Successfully created a new post title"
    });
  });
}

exports.adminPostById = (req, res, next, id) => {
  AdminPost.findById(id)
    .populate("campusId", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.adminPost = data;
      next();
    });
}

exports.getAdminPost = (req, res, next) => {
  const adminPost = req.admimPost;
  return res.json(adminPost);
}

exports.getAdminPosts = (req, res, next) => {
  AdminPost.find((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json(data);
  });
}

exports.deleteAdminPost = (req, res, next) => {
  const adminPost = req.admimPost;
  adminPost.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Successfully deleted a post title"
    });
  });
}