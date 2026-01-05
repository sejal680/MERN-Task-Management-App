import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// Create
router.post("/", async (req,res)=>{
  try { const task = await Task.create(req.body); res.json(task); }
  catch(e){ res.status(400).json({error: e.message}); }
});

// Read all
router.get("/", async (req,res)=>{
  const tasks = await Task.find().sort({createdAt:-1});
  res.json(tasks);
});

// Update
router.put("/:id", async (req,res)=>{
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(task);
  } catch(e){ res.status(400).json({error:e.message}); }
});

// Delete
router.delete("/:id", async (req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({success:true});
});

export default router;
