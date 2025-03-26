import jwt from "jsonwebtoken";
export const isAuth = async (req, resizeBy, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({ error: "You are not authenticated" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(403).json({ error: "Token is not valid" });
    }
    req.user = decode;
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Token is not valid",
    });
  }
};
