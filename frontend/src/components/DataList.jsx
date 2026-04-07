import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/DataListStyle.css";
import Card from "./Card";
import Modal from "./Modal";

function DataList() {

    const navigate = useNavigate();

    const [taskClicked, setTaskClicked] = useState(null);

    const [pendentes, setPendentes] = useState([]);
    const [andamento, setAndamento] = useState([]);
    const [concluidas, setConcluidas] = useState([]);

    const limit = 10;

    const [pagePendentes, setPagePendentes] = useState(0);
    const [pageAndamento, setPageAndamento] = useState(0);
    const [pageConcluidas, setPageConcluidas] = useState(0);

    const [hasMorePendentes, setHasMorePendentes] = useState(true);
    const [hasMoreAndamento, setHasMoreAndamento] = useState(true);
    const [hasMoreConcluidas, setHasMoreConcluidas] = useState(true);

    useEffect(() => {
        console.log("Componente montado!");
        loadAll(true);
    }, []);

    const loadTasksByStatus = async (status, page, setData, setHasMore) => {
        try {
            const res = await fetch(
                `http://localhost:8800/tasks?task_status=${status}&limit=${limit}&offset=${page * limit}`
            );

            const data = await res.json();

            setData(prev => [...prev, ...data]);
            setHasMore(data.length === limit);

        } catch (err) {
            console.error(err);
        }
    };

    const loadAll = (reset = false) => {
        if (reset) {
            setPendentes([]);
            setAndamento([]);
            setConcluidas([]);

            setPagePendentes(0);
            setPageAndamento(0);
            setPageConcluidas(0);
        }

        loadTasksByStatus("Pendente", 0, setPendentes, setHasMorePendentes);
        loadTasksByStatus("Andamento", 0, setAndamento, setHasMoreAndamento);
        loadTasksByStatus("Concluída", 0, setConcluidas, setHasMoreConcluidas);
    };

    const handleScrollPendentes = (e) => {
        const bottom =
            e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1;

        if (bottom && hasMorePendentes) {
            setPagePendentes(prev => {
                const next = prev + 1;
                loadTasksByStatus("Pendente", next, setPendentes, setHasMorePendentes);
                return next;
            });
        }
    };

    const handleScrollAndamento = (e) => {
        const bottom =
            e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1;

        if (bottom && hasMoreAndamento) {
            setPageAndamento(prev => {
                const next = prev + 1;
                loadTasksByStatus("Andamento", next, setAndamento, setHasMoreAndamento);
                return next;
            });
        }
    };

    const handleScrollConcluidas = (e) => {
        const bottom =
            e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1;

        if (bottom && hasMoreConcluidas) {
            setPageConcluidas(prev => {
                const next = prev + 1;
                loadTasksByStatus("Concluída", next, setConcluidas, setHasMoreConcluidas);
                return next;
            });
        }
    };

    function cardClickEvent(task) {
        setTaskClicked(task);
    }

    function closeModal() {
        setTaskClicked(null);
    }

    return (
        <>
            <div style={{ marginBottom: "20px" }}>
                <button className="btnGerenciar" onClick={() => navigate("/crud")}>
                    Gerenciar Tarefas
                </button>
            </div>

            <div className="containerDataList">

                <div style={{ height: 300 }}>
                    <h2>Pendentes</h2>

                    <div
                        onScroll={handleScrollPendentes}
                        style={{ overflowY: "auto", height: "calc(300px - 40px)" }}
                    >
                        {pendentes.map(task => (
                            <Card key={task.id} onClickCard={cardClickEvent} task={task} />
                        ))}
                    </div>
                </div>

                <div style={{ height: 300 }}>
                    <h2>Andamento</h2>

                    <div
                        onScroll={handleScrollAndamento}
                        style={{ overflowY: "auto", height: "calc(300px - 40px)" }}
                    >
                        {andamento.map(task => (
                            <Card key={task.id} onClickCard={cardClickEvent} task={task} />
                        ))}
                    </div>
                </div>

                <div style={{ height: 300 }}>
                    <h2>Concluídas</h2>

                    <div
                        onScroll={handleScrollConcluidas}
                        style={{ overflowY: "auto", height: "calc(300px - 40px)" }}
                    >
                        {concluidas.map(task => (
                            <Card key={task.id} onClickCard={cardClickEvent} task={task} />
                        ))}
                    </div>
                </div>

            </div>

            {taskClicked && (
                <Modal task={taskClicked} onClose={closeModal} />
            )}
<<<<<<< HEAD
=======

            <div className="datalist-nome">
                Desenvolvido por Erick Maestri de Souza
            </div>
>>>>>>> ec27108 (Adicionando meu nome na tela)
        </>
    );
}

export default DataList;
