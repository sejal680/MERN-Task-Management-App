import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>res.send("Task Manager API running"));
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/task_manager";

mongoose.connect(MONGO_URI).then(()=>{
  console.log("MongoDB connected");
  app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
}).catch(err=>console.error("DB error:", err));
