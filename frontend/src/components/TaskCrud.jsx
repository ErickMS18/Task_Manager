import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/TaskCrudStyle.css";

function TaskCrud() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    task_status: "Pendente",
    prioridade: "Nenhuma",
    data_limite: ""
  });

  const STATUS_OPTIONS = ["Pendente", "Andamento", "Concluída"];
  const PRIORIDADE_OPTIONS = ["Baixa", "Média", "Alta", "Nenhuma"];

  const loadTasks = async (reset = false) => {
    try {
      const currentPage = reset ? 0 : page;

      const res = await fetch(
        `http://localhost:8800/tasks?limit=${limit}&offset=${currentPage * limit}`
      );

      if (!res.ok) throw new Error("Erro ao carregar tarefas");

      const data = await res.json();

      setTasks(prev => (reset ? data : [...prev, ...data]));
      setHasMore(data.length === limit);
      setError("");
    } catch (err) {
      setError(err.message || "Erro ao buscar tarefas");
    }
  };

  useEffect(() => {
    loadTasks(true);
  }, []);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1;

    if (bottom && hasMore) {
      setPage(prev => {
        const next = prev + 1;
        loadTasks(false);
        return next;
      });
    }
  };

  const filteredTasks = tasks.filter(task =>
    (task.titulo || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectTask = (task) => {
    setSelectedTask(task);
    setMessage("");
    setError("");

    setForm({
      titulo: task.titulo || "",
      descricao: task.descricao || "",
      task_status: task.task_status || "Pendente",
      prioridade: task.prioridade || "Nenhuma",
      data_limite: task.data_limite ? task.data_limite.split("T")[0] : ""
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdate = async () => {
    try {
      const url = selectedTask
        ? `http://localhost:8800/tasks/${selectedTask.id}`
        : "http://localhost:8800/tasks";

      const method = selectedTask ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!res.ok) throw new Error("Erro ao salvar tarefa");

      setMessage(
        selectedTask
          ? "Tarefa atualizada com sucesso!"
          : "Tarefa criada com sucesso!"
      );

      setError("");

      setForm({
        titulo: "",
        descricao: "",
        task_status: "Pendente",
        prioridade: "Nenhuma",
        data_limite: ""
      });

      setSelectedTask(null);
      setTasks([]);
      setPage(0);
      loadTasks(true);

    } catch (err) {
      setError(err.message || "Erro ao salvar tarefa");
      setMessage("");
    }
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:8800/tasks/${selectedTask.id}`,
        { method: "DELETE" }
      );

      if (!res.ok) throw new Error("Erro ao deletar tarefa");

      setMessage("Tarefa deletada com sucesso!");
      setError("");

      setSelectedTask(null);

      setForm({
        titulo: "",
        descricao: "",
        task_status: "Pendente",
        prioridade: "Nenhuma",
        data_limite: ""
      });

      setTasks([]);
      setPage(0);
      loadTasks(true);

    } catch (err) {
      setError(err.message || "Erro ao deletar tarefa");
      setMessage("");
    }
  };

  return (
    <div className="taskcrud-container">
      <h2>Gerenciador de Tarefas</h2>

      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}

      <input
        className="taskcrud-search"
        placeholder="Buscar task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="taskcrud-list" onScroll={handleScroll}>
        {filteredTasks.map(task => (
          <div
            key={task.id}
            onClick={() => handleSelectTask(task)}
            className={`taskcrud-item ${
              selectedTask?.id === task.id ? "active" : ""
            }`}
          >
            {task.titulo}
          </div>
        ))}
      </div>

      <div className="taskcrud-form">
        <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Título"/>
        <input name="descricao" value={form.descricao} onChange={handleChange} placeholder="Descrição"/>

        <select name="task_status" value={form.task_status} onChange={handleChange}>
          {STATUS_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <select name="prioridade" value={form.prioridade} onChange={handleChange}>
          {PRIORIDADE_OPTIONS.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <input
          type="date"
          name="data_limite"
          value={form.data_limite}
          onChange={handleChange}
        />

        <div className="taskcrud-actions">
          <button className="primary" onClick={handleCreateOrUpdate}>
            {selectedTask ? "Atualizar" : "Criar"}
          </button>

          {selectedTask && (
            <button className="danger" onClick={handleDelete}>
              Deletar
            </button>
          )}
        </div>
      </div>

      <div className="taskcrud-footer">
        <button className="btnVoltar" onClick={() => navigate("/")}>Voltar</button>
      </div>
    </div>
  );
}

export default TaskCrud;
