
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    // Authorization header se token lo
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        success: false,
        message: "Token missing."
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized."
      });
    }

    req.id = decoded.id;
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = verifyToken;

