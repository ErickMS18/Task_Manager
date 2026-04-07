import "./../styles/Modalstyle.css";

export default function Modal({ task, onClose }) {

    if (!task) return null;

    return (
        <div className="containerModal">
            <div className="modalBox">

                <button className="closeModal" onClick={onClose}>
                    ×
                </button>

                <h2>{task.titulo}</h2>

                <p>
                    <strong>Descrição:</strong><br />
                    {task.descricao || "Sem descrição"}
                </p>

                <p>
                    <strong>Status:</strong> {task.task_status}
                </p>

                <p>
                    <strong>Prioridade:</strong> {task.prioridade}
                </p>

                <p>
                    <strong>Data Limite:</strong>{" "}
                    {task.data_limite
                        ? new Date(task.data_limite).toLocaleDateString()
                        : "Sem data"}
                </p>

                <p>
                    <strong>Criado em:</strong>{" "}
                    {new Date(task.created_at).toLocaleString()}
                </p>

            </div>
        </div>
    );
}
