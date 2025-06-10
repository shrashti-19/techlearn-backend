const admin = (req, res, next) => {
  // Ensure protect middleware has run first and attached req.user
  if (req.user && req.user.isAdmin) {
    next(); // User is an admin, proceed
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

module.exports = { admin };