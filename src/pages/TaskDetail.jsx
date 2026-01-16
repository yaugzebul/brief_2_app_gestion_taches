import { useParams, useNavigate } from "react-router-dom"; // useNavigate pour le bouton retour

// --- 1. LES STYLES (Objets JavaScript) ---

const containerStyle = {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "sans-serif"
};

const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    borderLeft: "6px solid #3b82f6" // Barre bleue sur le côté pour le style
};

const titleStyle = {
    fontSize: "2rem",
    color: "#1e293b",
    marginBottom: "20px",
    marginTop: "0"
};

const descriptionStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    color: "#475569",
    whiteSpace: "pre-wrap", // Gère les sauts de ligne automatiquement
    backgroundColor: "#f8fafc",
    padding: "15px",
    borderRadius: "8px"
};

const backButtonStyle = {
    backgroundColor: "transparent",
    color: "#64748b",
    border: "1px solid #cbd5e1",
    padding: "8px 16px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "20px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "8px"
};

// --- 2. LE COMPOSANT ---

function TaskDetail({ tasks }) {
    const { id } = useParams(); // Récupère l'ID dans l'URL
    const navigate = useNavigate(); // Outil pour revenir en arrière

    // On cherche la tâche correspondante
    const task = tasks.find((t) => t.id === parseInt(id));

    // Si la tâche n'existe pas (mauvais ID tapé à la main)
    if (!task) {
        return (
            <div style={containerStyle}>
                <h2>Oups ! Cette tâche n'existe pas.</h2>
                <button onClick={() => navigate("/")} style={backButtonStyle}>
                    Retour à l'accueil
                </button>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            {/* Bouton pour revenir à la liste sans utiliser la Navbar */}
            <button onClick={() => navigate("/")} style={backButtonStyle}>
                ← Retour à la liste
            </button>

            <div style={cardStyle}>
                <h1 style={titleStyle}>{task.title}</h1>
                <div style={descriptionStyle}>
                    {task.description}
                </div>
            </div>
        </div>
    );
}

export default TaskDetail;