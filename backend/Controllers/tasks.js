import {db} from "../db/db.js";

export const getTasks = (req, res) => {
    const taskStatus = req.query.task_status;
    let query = 'SELECT * FROM tasks';
    let params = [];

    if(taskStatus) {
        query += ' WHERE task_status = ?';
        params.push(taskStatus);
    }

    db.query(query, params, (err,data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

export const getIdTasks = (req, res) => {
    const id = req.params.id;
    const query = 'SELECT * FROM tasks WHERE id = ?';
    const params = [id];

    db.query(query, params, (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.length === 0) {
            return res.status(404).json({
                message: "Tarefa não encontrada!"
            });
        }
        return res.status(200).json(data[0]);
    });
};

export const createTask = (req, res) => {
    const {titulo, descricao, task_status, prioridade, data_limite } = req.body;
    const query = 'INSERT INTO tasks (titulo, descricao, task_status, prioridade, data_limite) VALUES (?, ?, ?, ?, ?)';
    const params = [titulo, descricao, task_status, prioridade, data_limite];

    if(!titulo || !titulo.trim()){
        return res.status(400).json({message: "Título é obrigatório!"});
    };

    const statusValidos = ["Pendente", "Andamento", "Concluída"];
    if (task_status && !statusValidos.includes(task_status)) {
        return res.status(400).json({message: "Status inválido!"});
    };

    const prioridadesValidas = ["Baixa", "Média", "Alta", "Nenhuma"];
    if (prioridade && !prioridadesValidas.includes(prioridade)) {
        return res.status(400).json({message: "Prioridade inválida!"});
    };

    if(data_limite && isNaN(Date.parse(data_limite))) {
        return res.status(400).json({message: "Data inválida!"})
    };

    db.query(query, params, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(201).json({
            message: "Tarefa criada com sucesso!",
            id: data.insertId
        });
    });
};

export const updateTask = (req, res) => {
    const id = req.params.id;
    const {titulo, descricao, task_status, prioridade, data_limite } = req.body;
    
    let campos = [];
    let params = [];

    if (titulo !== undefined) {
        if (!titulo || !titulo.trim()) {
            return res.status(400).json({message: "Título inválido!"});
        }
        campos.push("titulo = ?");
        params.push(titulo.trim());
    }

    if (task_status !== undefined) {
        const statusValidos = ["Pendente", "Andamento", "Concluída"];
        if (!statusValidos.includes(task_status)) {
            return res.status(400).json({message: "Status inválido!"});
        }
        campos.push("task_status = ?");
        params.push(task_status);
    }

    if (prioridade !== undefined) {
        const prioridadesValidas = ["Baixa", "Média", "Alta", "Nenhuma"];
        if (!prioridadesValidas.includes(prioridade)) {
            return res.status(400).json({message: "Prioridade inválida!"});
        }
        campos.push("prioridade = ?");
        params.push(prioridade);
    }

    if (data_limite !== undefined) {
        if (data_limite && isNaN(Date.parse(data_limite))) {
            return res.status(400).json({message: " Data inválida!"})
        }
        campos.push("data_limite = ?");
        params.push(data_limite);
    }

    if (descricao !== undefined) {
        campos.push("descricao = ?");
        params.push(descricao);
    }

    if (campos.length === 0) {
        return res.status(400).json({message: "Nenhum campo para atualizar!"});
    }
    
    const query = `UPDATE tasks SET ${campos.join(", ")} WHERE id = ?`;
    params.push(id);

    db.query(query, params, (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.affectedRows === 0) {
            return res.status(404).json({
                message: "Tarefa não encontrada"
            });
        }

        return res.status(200).json({
            message: "Tarefa atualizada com sucesso!"
        });
    });
};

export const deleteTask = (req, res) => {
    const id = req.params.id;
    const query = 'DELETE FROM tasks WHERE id = ?';
    const params = [id];

    db.query(query, params, (err, data) => {
        if (err) return res.status(500).json(err);

        if (data.affectedRows === 0) {
            return res.status(404).json({
                message: "Tarefa não encontrada"
            });
        }

        return res.status(200).json({
            message: "Tarefa apagada com sucesso!"
        });
    });
};