import { useParams } from "react-router-dom";

function TaskDetail({ tasks }) { // 1. On récupère la liste des tâches ici
    const { id } = useParams();

    // 2. On cherche la tâche qui a le même ID que celui de l'URL
    // Note : parseInt(id) sert à transformer le texte "1" en nombre 1
    const task = tasks.find((t) => t.id === parseInt(id));

    // 3. Si on ne trouve pas la tâche (ex: l'utilisateur tape un ID qui n'existe pas)
    if (!task) {
        return <h2>Tâche introuvable !</h2>;
    }

    // 4. On affiche les vraies infos de la tâche trouvée
    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
}

export default TaskDetail;