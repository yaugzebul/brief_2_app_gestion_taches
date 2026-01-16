import { Link } from "react-router-dom";

function Home({ tasks, onDeleteTask }) { // On récupère l'outil de suppression ici
    return (
        <div>
            <h1>Accueil : Liste des tâches</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: "10px" }}>
                        <Link to={`/tache/${task.id}`}>{task.title}</Link>

                        {/* Bouton de suppression associé à la tâche */}
                        <button
                            onClick={() => onDeleteTask(task.id)}
                            style={{ marginLeft: "10px", color: "red" }}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;