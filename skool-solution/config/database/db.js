const mongoose = require("mongoose");
const winston = require("winston");

require("dotenv").config();

const env = process.env.NODE_ENV;
let database = process.env.DB_HOST;

module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(`${process.env.DB_HOST}`, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
    .then(() => {
      winston.info("Connection to database established");
    })
    .catch(err => {
      winston.error(`Failed to connect to db. ${err.message}`);
    });
}