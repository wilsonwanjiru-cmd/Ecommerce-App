import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize the Express app
const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(morgan("dev")); // Logging middleware for development mode

// Route Registration
app.use("/api/v1/auth", authRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to the E-commerce App API</h1>");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err); // If headers are already sent, pass to default Express handler
  }
  res.status(err.code || 500).json({
    success: false,
    message: err.message || "An unknown error occurred!",
  });
});

// Port Configuration
const PORT = process.env.PORT || 8080;

// Start the Server
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
