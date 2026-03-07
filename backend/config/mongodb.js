import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed:", error);
  }
};

export default connectDB;
