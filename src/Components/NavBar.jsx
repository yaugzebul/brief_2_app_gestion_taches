import { NavLink } from "react-router-dom";

// --- 1. LES STYLES (Objets JavaScript) ---

const navContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Espace entre le logo et les liens
    padding: "0 40px",
    height: "70px",
    backgroundColor: "#64006e",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // Ombre légère pour le relief
    marginBottom: "40px"
};

const logoStyle = {
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "#ddd7de", // Bleu "Vite" / Start-up
    textDecoration: "none"
};

const menuStyle = {
    display: "flex",
    gap: "30px"
};

// Fonction pour gérer le style dynamique (Lien normal vs Lien actif)
const getLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    color: isActive ? "#bed6fb" : "#cfce27", // Bleu si actif, gris sinon
    borderBottom: isActive ? "2px solid #3b82f6" : "2px solid transparent", // Barre sous le lien actif
    padding: "5px 0",
    transition: "all 0.3s ease" // Animation fluide
});

// --- 2. LE COMPOSANT ---

function NavLinks() {
    return (
        <nav style={navContainerStyle}>
            {/* Un faux logo pour faire pro */}
            <NavLink to="/" style={logoStyle}>Taskify</NavLink>

            <div style={menuStyle}>
                <NavLink to="/" style={getLinkStyle}>
                    Accueil
                </NavLink>
                <NavLink to="/nouveau" style={getLinkStyle}>
                    Ajouter une tâche
                </NavLink>
            </div>
        </nav>
    );
}

export default NavLinks;