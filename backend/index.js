<<<<<<< HEAD
import express from "express";
import cors from "cors";
import tasksRoutes from "./Routes/tasks.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/tasks", tasksRoutes)

app.listen(8800, () => {
    console.log("Servidor rodando na porta 8800!");
});


=======
import express from "express";
import cors from "cors";
import tasksRoutes from "./Routes/tasks.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/tasks", tasksRoutes)

app.listen(8800, () => {
    console.log("Servidor rodando na porta 8800!");
});


>>>>>>> ec27108 (Adicionando meu nome na tela)
