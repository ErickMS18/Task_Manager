<<<<<<< HEAD
import express from "express";
import { getTasks, getIdTasks, createTask, updateTask, deleteTask } from "../Controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getIdTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

=======
import express from "express";
import { getTasks, getIdTasks, createTask, updateTask, deleteTask } from "../Controllers/tasks.js";

const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getIdTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

>>>>>>> ec27108 (Adicionando meu nome na tela)
export default router;