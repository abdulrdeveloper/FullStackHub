import jwt from "jsonwebtoken";

async function verifyArtist(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.type !== "artist") {
      return res
        .status(403)
        .json({ message: "You don't have permission to create music" });
    }
    req.user = decoded;
    next();
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    console.error("Verify artist error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

export default verifyArtist;
