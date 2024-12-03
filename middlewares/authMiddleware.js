import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes (Token-Based Middleware)
export const requireSignIn = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access, token missing or invalid format",
      });
    }

    const token = authHeader.split(" ")[1]; // Extract the token after 'Bearer'
    const decoded = JWT.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Attach user info to the request
    next(); // Proceed to the next middleware
  } catch (error) {
    console.error("JWT Verification Error:", error.message);

    res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

// Admin Access Middleware
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id); // Fetch user by ID from the decoded token

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.role !== 1) { // Check if the user's role is admin (assuming 1 = admin)
      return res.status(403).json({
        success: false,
        message: "Forbidden: Admin access required",
      });
    }

    next(); // User is admin, proceed
  } catch (error) {
    console.error("Admin Middleware Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Error in admin middleware",
      error: error.message,
    });
  }
};
