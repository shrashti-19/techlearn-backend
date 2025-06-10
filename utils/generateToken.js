const jwt = require('jsonwebtoken');

const generateToken = (userId, isAdmin = false) => {
  return jwt.sign({ id: userId, isAdmin: isAdmin}, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

module.exports = generateToken;
