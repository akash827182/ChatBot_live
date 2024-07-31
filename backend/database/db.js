import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: "ChatBot",
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
