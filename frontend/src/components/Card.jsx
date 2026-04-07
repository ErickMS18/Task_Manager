import "./../styles/CardStyle.css";

function Card(props) {
    return (
        <div className="containerCard">

            <strong>Titulo:</strong> {props.task.titulo}<br/>
            <strong>Status:</strong> {props.task.task_status}<br/>
            <strong>Prioridade:</strong> {props.task.prioridade}<br/>

            <button onClick={() => props.onClickCard(props.task)}>
                Ver detalhes
            </button>

        </div>
    );
}

export default Card;
