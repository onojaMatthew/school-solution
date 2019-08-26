// const expressJwt = require("express-jwt");
// const decrypt = require("./encryptor");
// const encrypt = require("./encryptor");
const jwt = require("jsonwebtoken");

require("dotenv").config();


exports.requireLogin = (req, res, next) => {
  const token = req.header("x-auth-token");
  if(!token) return res.status(403).json({
    error: "Access denied. No token provided"
  });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decode;
    next();
  } catch(err) {
    return res.status(401).json({
      error: "Invalid token"
    });
  }
};

// exports.getToken = (req, res, next) => {
//   let token;
//   if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
//     token = req.headers.authorization.split(" ")[1];
//   } else if (req.query && req.query.token) {
//     token = req.query.token;
//   }
//   if (!token) return null;
//   try {
//     const decryptor = decrypt(token);
//     return decryptor;
//   } catch(err) {
//     return null;
//   }
// }
