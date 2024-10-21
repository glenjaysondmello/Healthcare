const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodedToken) {
      req.userId = decodedToken.userId;
      next();
    }
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

module.exports = auth;
