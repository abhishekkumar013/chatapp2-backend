import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const instance = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB connected: ${instance.connection.name}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
export default ConnectDB;
