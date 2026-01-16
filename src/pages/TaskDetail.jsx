import { useParams } from "react-router-dom"; // On importe l'outil pour lire l'URL

function TaskDetail() {
    const { id } = useParams(); // On récupère l'ID dynamiquement

    return (
        <div>
            <h1>Détail de la tâche : {id}</h1>
        </div>
    );
}

export default TaskDetail;