import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTask({ onAddTask }) {
    // 1. On crée une "mémoire locale" pour ce que l'utilisateur tape
    const [title, setTitle] = useState("");

    // 2. On initialise notre GPS de navigation
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche la page de se racharger

        // On crée l'objet de la nouvelle tâche
        const newTask = {
            id: Date.now(), // Un ID unique basé sur l'heure actuelle
            title: title,
            description: "Tâche ajoutée manuellement"
        };

        // 3. On utilise l'outil reçu du parent pour ajouter la tâche
        onAddTask(newTask);

        // 4. On demande au GPS de nous ramener à l'accueil
        navigate("/");
    };

    return (
        <div>
            <h1>Ajouter une nouvelle tâche</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nom de la tâche..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // Met à jour le titre à chaque lettre tapée
                />
                <button type="submit">Enregistrer</button>
            </form>
        </div>
    );
}

export default NewTask;