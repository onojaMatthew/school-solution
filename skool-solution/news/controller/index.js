const { News } = require("../model");
const _ = require("lodash");

exports.createNews = (req, res, next) => {
  let news = new News(req.body);
  news.createdAt = req.profile;

  news.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "News successfully created"
    });
  });
}

exports.newsById = (req, res, next, id) => {
  news.findById(id)
    .populate("createdBy", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      req.news = data;
      next();
    });
}

exports.getAllNews = (req, res, next) => {
  News.find()
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

exports.getNews = (req, res, next) => {
  return res.json(req.news);
}

exports.updateNews = (req, res, next) => {
  let news = req.news;
  news = _.extend(news, req.body);
  news.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "News updated successfully"
    });
  });
}

exports.deleteNews = (req, res, next) => {
  let news = req.news;
  news.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "News deleted successfully"
    });
  });
}