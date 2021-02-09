const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = (req, res, next) => {
  const authHeader = req.header.authorization;

  if (!authHeader) {
    return res.statsu(401).json({ message: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

    req.userId = decoded.id;

    return next();

  } catch(err) {
    return res.status(401).json({ message: 'Token invalid' })
  }
}