import jwt from "jsonwebtoken";

export function authCheck(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.type !== "user" && decoded.type !== "artist") {
            return res.status(401).json({ message: "Unauthorized" });
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
        console.error("Auth check error:", error);
        return res.status(500).json({ message: "Failed to authenticate user" });
    }
}

export default authCheck;