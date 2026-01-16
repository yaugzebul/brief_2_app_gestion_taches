import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 1. LES STYLES
const formBox = {
    maxWidth: "400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
};

const inputStyle = {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc"
};

const btnStyle = {
    backgroundColor: "#27ae60", // Vert
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

function NewTask({ onAddTask }) {
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        onAddTask({ id: Date.now(), title, description: "Nouvelle tâche" });
        navigate("/");
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Nouvelle tâche</h1>
            {/* 2. APPLICATION SUR LE FORMULAIRE ET SES ÉLÉMENTS */}
            <form onSubmit={handleSubmit} style={formBox}>
                <input
                    style={inputStyle}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titre de la tâche..."
                />
                <button type="submit" style={btnStyle}>Enregistrer</button>
            </form>
        </div>
    );
}

export default NewTask;