exports.signupValidator = (req, res, next) => {
  req.check("username", "Username must be between 6 and 32 characters")
    .isLength({
      min: 4,
      max: 2000
    });
  req.check("email", "Email is required").notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
  req.check("password", "Password is required").notEmpty()
    .matches(/\d/)
    .withMessage("Password must contain a number")
    .isLength({
      min: 6,
      max: 32
    })
    .withMessage("Password must contain at least 6 characters");

    const errors = req.validationErrors();

    if (errors) {
      const firstError = errors.map(error => error.msg)[0];
      return res.status(400).json({
        error: firstError
      });
    }

  next();
}

exports.campusValidator = (req, res, next) => {
  req.check("name", "Campus name is required").notEmpty()
    .isLength({
      min: 4,
      max: 32
    })
    .withMessage("Campus name must be at least 4 characters long");

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError
    })
  }

  next();
}

exports.classValidator = (req, res, next) => {
  req.check("name", "Class name is required").notEmpty()
    .isLength({
      min: 4,
      max: 32
    })
    .withMessage("Class name must be at least 4 characters long");

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError
    });
  }
  next();
}

exports.subjectValidator = (req, res, next) => {
  req.check("name", "Subject name is required").notEmpty()
    .isLength({
      min: 3,
      max: 32
    })
    .withMessage("Subject name must be at least 3 characters long");

  const errors = req.validationErrors();

  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError
    });
  }
  next();
}

exports.adminValidator = (req, res, next) => {
  req.check("fullname", "Full name is required").notEmpty()
    .isLength({
      min: 3,
      max: 32
    })
    .withMessage("Full name must be at least 3 characters long")
  
  req.check("username", "username is required")
    .notEmpty()
    .isLength({
      min: 5,
      max: 32
    })
    .withMessage("Username must be at least 5 characters long");

  req.check("password", "Password is required")
    .notEmpty()
    .matches(/\d/)
    .withMessage("Password must contain  a number")
    .isLength({
      min: 6,
      max: 32
    })
    .withMessage("Password must be at least 6 characters long")

  req.check("level", "Admin level is required")
    .notEmpty();

  const errors = req.validationErrors();
  if (errors) {
    let firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError
    })
  }
  next();
}

exports.adminpostValidator = (req, res, next) => {
  req.check("title", "Title is required")
    .notEmpty()
    .isLength({
      min: 5,
      max: 32
    })
    .withMessage("Title must be at least 5 characters long");

    const errors = req.validationErrors();
    if (errors) {
      const firstError = errors.map((error) => error.msg)[0];
      return res.status(400).json({
        error: firstError
      });
    }
    next();
}

exports.weeklyReportValidator = (req, res, next) => {
  req.check("title", "Title is required")
    .notEmpty()
    .isLength({
      min: 6,
      max: 32
    })
    .withMessage("Report title must be at least 6 characters long");

  req.check("from", "Reporting date is required").notEmpty()

  req.check("to", "Last date of report is required").notEmpty()

  req.check("report", "Report is required").notEmpty()
    .isLength({
      min: 10,
      max: 2500
    })
    .withMessage("Report must be at least 10 characters long");

  const errors = req.validationErrors();

  if (errors) {
    let firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError
    });
  }
  next();
}

exports.accountantValidator = (req, res, next) => {
  req.check("fullname", "Full name is required").notEmpty()
    .isLength({
      min: 6,
      max: 70
    })
    .withMessage("Full name must be at least 3 characters long");

  req.check("password", "Password is required").notEmpty()
    .matches(/\d/)
    .withMessage("Password must contain a number")
    .isLength({
      min: 6,
      max: 32
    })
    .withMessage("Password must be at least 6 characters long")

  req.check("username", "Username is required").notEmpty()
    .isLength({
      min: 4,
      max: 32
    })
    .withMessage("Username must be at least 4 characters long")

  const errors = req.validationErrors();

  if (errors) {
    let firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({
      error: firstError
    });
  }
  next();
}

exports.eventValidator = (req, res,  next) => {
  req.check("title", "Event title is required").notEmpty()
    .isLength({
      min: 20,
      max: 200
    })
    .withMessage("Event title must be at least 20 characters");

  req.check('description', "Event description is required").notEmpty()
    .isLength({
      min: 30,
      max: 2000
    })
}

