require("dotenv").config();

const jwtSecret = process.env.JWT_SECRETE_KEY || "SOMETHINGSPECIALILOVE";
const { getToken } = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const { Accountant } = require("../accountant/model");
const { Admin } = require("../admin/model");
const { Teacher } = require("../teacher/model");
const { Student } = require("../student/model");

exports.isValidAccountant = (req, res, next) => {
  let accessToken = getToken(req);
  let filter;

  if (!req.params) return res.status(400).json({
    error: "Request should have request parameters"
  });

  if (!accessToken) return res.status(403).json({
    error: "Authorization failed. Undefined token"
  });

  try {
    const { payload: { id, email } } = jwt.verify(accessToken, jwtSecret);
    if (id && email) {
      filter = { id, email };
    } else if (id) {
      filter = { id };
    } else if (email) {
      filter = { email };
    }

    return Accountant.findOne(filter).exec((err, accountant) => {
      if (err || !accountant) {
        return res.status(404).json({
          error: `Accountant with the id ${_id} or username ${email} not found`
        });
      }
      res.locals.userId = id;
      res.locals.userType = "accountant";
      res.locals.role = accountant.role;
      return next();
    })
  } catch(err) {
    res.status(400).json({
      error: "Accountant verification failed"
    });
  } 
}

exports.isValidAdmin = (req, res, next) => {
  const accessToken = getToken(req);
  let filter;

  if (!req.params) return res.status(400).json({
    error: "Request must have request parameters"
  });

  if (!accessToken) return res.status(403).json({
    error: "Authorization failed. Token not provided."
  });

  try {
    const { payload: { id, email } } = jwt.verify(accessToken, jwtSecret);
    if (_id && email) {
      filter = { id, email};
    } else if (id) {
      filter = { id };
    } else if (email) {
      filter = { email };
    }

    return Admin.findOne(filter).exec()
      .then(admin => {
        if (!admin) {
          return res.status(404).json({
            error: `Admin with the id ${id} or username ${email} is not found`
          });
        }

        res.locals.userType = "admin";
        res.locals.userId = id;
        res.locals.role = admin.role;

        return next();
      })
  } catch (err) {
    return res.status(404).json({
      error: "Admin verification failed"
    });
  }
}

exports.isValidTeacher = (req, res, next) => {
  const accessToken = getToken(req);
  let filter;

  if (!req.params) return res.status(400).json({
    error: "Request must have request parameters"
  });

  if (!accessToken) return res.status(403).json({
    error: "Authorization failed. Token not provided"
  });

  try {
    const { payload: { id, email } } = jwt.verify(accessToken, process.env.JWT_SECRET);
    if (_id && email) {
      filter = { id, email};
    } else if (id) {
      filter = { id };
    } else if (email) {
      filter = { email };
    }

    return Teacher.findOne(filter).exec()
      .then(teacher => {
        if (!teacher) return res.status(400).json({
          error: `Teacher with the id ${id}  or username ${email} not found`
        });

        res.locals.userType = "teacher";
        res.locals.userId = id;
        res.locals.role = teacher.role;

        return next();
      })
  } catch(err) {
    res.status(400).json({
      error: "Teacher authorization failed"
    });
  }
}

exports.isValidStudent = (req, res, next) => {
  const accessToken = getToken(req);
  let filter;

  if (!req.params) {
    return res.status(400).json({
      error: "Request must have request params"
    });
  }

  if (!accessToken) return res.status(403).json({
    error: "Authorization failed. Token not provided"
  });

  try {
    const { payload: { id, username } } = jwt.verify(accessToken, jwtSecret);
    if (id && username) {
      filter = { id, username };
    } else if (id) {
      filter = { id };
    } else if (username) {
      filter = { username };
    }

    return Student.findOne(filter).exec()
      .then(student => {
        if (!student) return res.status(400).json({
          error: `Student with the id ${id} or username ${username} not found`
        });

        res.locals.userType = "student";
        res.locals.userId = id;
        res.locals.role = student.role;

        return next();
      });
  } catch(err) {
    res.status(400).json({
      error: "Student authorization failed"
    });
  }
}
