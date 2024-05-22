const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  // Check for session-based authentication
  if (req.session.isAuthenticated) {
    console.log('Session authenticated');
    return next();
  }

  // Check for JWT token in the Authorization header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (token) {
    try {
      const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace 'your_jwt_secret' with your actual secret key
      console.log('Token verified:', decoded);
      req.user = decoded; // Attach user information to the request object
      return next();
    } catch (error) {
      return res.status(401).send('Invalid token');
    }
  }

  console.log('No valid session or token found');
  // If neither session nor JWT token is available, return an unauthorized error
  res.status(401).send('User not authenticated');
};

module.exports = authenticate;
