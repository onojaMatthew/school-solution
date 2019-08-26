const { Report } = require("../model");
const _ = require("lodash");

exports.createReport = async (req, res, next) => {
  let report = await new Report(req.body);
  report.createdBy = req.profile;
  return report.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json(data);
  });
}

exports.getReportBy = (req, res, next) => {
  Report.find({ createdBy: req.params.userId })
    .populate("createdBy", "_id name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }
      res.json(data);
    });
}

exports.reportById = (req, res, next, id) => {
  Report.findById(id)
    .populate("createdBy", "_id name")
    .then(report => {
      req.report = report;
      next();
    })
    .catch(err => {
      res.json({
        error: err.message
      });
    });
}

exports.getReports = (req, res, next) => {
  Report.find()
    .populate("createdBy", "_id name")
    .select("createdBy createdAd title report from to")
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json({
        error: err.message
      });
    });
}

exports.getReport = (req, res, next) => {
  return res.json(req.report);
}

exports.deleteReport = (req, res, next) => {
  const report = req.report;
  report.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err.message
      });
    }
    res.json({
      message: "Report has been successfully deleted"
    });
  });
}