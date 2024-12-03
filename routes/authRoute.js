import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// Initialize the router
const router = express.Router();

/**
 * @route POST /api/v1/auth/register
 * @desc Register a new user
 * @access Public
 */
router.post("/register", registerController);

/**
 * @route POST /api/v1/auth/login
 * @desc Authenticate user and return token
 * @access Public
 */
router.post("/login", loginController);

/**
 * @route GET /api/v1/auth/test
 * @desc Test route for admin access verification
 * @access Protected (Admin Only)
 */
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
