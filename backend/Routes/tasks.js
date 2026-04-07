import express from "express";
import { getTasks, getIdTasks, createTask, updateTask, deleteTask } from "../Controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getIdTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;