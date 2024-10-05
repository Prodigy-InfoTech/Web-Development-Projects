require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, "ThisIsASecretKey", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};