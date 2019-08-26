const { Gallery } = require("../model");
const _ = require("lodash");

exports.createGallery = (req, res, next) => {
  let gallery = new Gallery(req.body);
  gallery.createdAt = req.profile;

  gallery.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "New photo added to gallery"
    });
  });
}

exports.galleryById = (req, res, next, id) => {
  Gallery.findById(id)
    .populate("createdBy", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.gallery = data;
      next();
    });
}

exports.getGalleries = (req, res, next) => {
  Gallery.find()
    .populate("createdBy", "_id name")
    .exec((err, data) => {
      if (err || !data) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.getGallery = (req, res, next) => {
  return res.json(req.gallery);
}

exports.updateGallery = (req, res, next) => {
  let gallery = req.gallery;
  gallery = _.extend(gallery, req.body);
  gallery.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Photo updated successfully"
    });
  });
}

exports.deletePhoto = (req, res, next) => {
  let gallery = req.gallery;
  gallery.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Photo deleted successfully"
    });
  });
}