const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const jwtPassword = process.env.JWT_PASSWORD;
    const decodedToken = jwt.verify(token, jwtPassword);
    const userId = decodedToken.userId;
    req.userId = userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ error: "Invalid request !" + error });
  }
};
