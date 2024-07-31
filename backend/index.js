import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
//using Middlewares
app.use(express.json());
app.use(cors());

//Importing Routes
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

//Using Routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(port, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
  connectDb();
});
