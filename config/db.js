import mongoose from "mongoose";
import colors from "colors"; // Ensure colors is installed

const connectDB = async () => {
  try {
    // Debugging: Log the URI being used
    console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);

    // Connect to MongoDB using Mongoose
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Recommended options for Mongoose
      useUnifiedTopology: true, // Recommended for stable connection handling
    });

    // Success message
    console.log(
      `Connected to MongoDB Database: ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    // Log the error
    console.error(`Error connecting to MongoDB: ${error.message}`.bgRed.white);

    // Exit the process with failure
    process.exit(1);
  }
};

export default connectDB;
