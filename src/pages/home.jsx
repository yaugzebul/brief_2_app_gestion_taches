import { Link } from "react-router-dom";

// 1. LES STYLES
const cardStyle = {
    backgroundColor: "#f4f4f4",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ddd"
};

const deleteBtnStyle = {
    backgroundColor: "#e74c3c", // Rouge
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "4px",
    cursor: "pointer"
};

function Home({ tasks, onDeleteTask }) {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Liste des tâches</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task) => (
                    // 2. APPLICATION SUR LA CARTE
                    <li key={task.id} style={cardStyle}>
                        <Link to={`/tache/${task.id}`} style={{ textDecoration: "none", color: "#333" }}>
                            <strong>{task.title}</strong>
                        </Link>

                        {/* 3. APPLICATION SUR LE BOUTON */}
                        <button onClick={() => onDeleteTask(task.id)} style={deleteBtnStyle}>
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;