import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", padding: "10px" }}>
            <NavLink to="/" style={{ marginRight: "10px" }}>Accueil</NavLink>
            <NavLink to="/nouveau">Ajouter une tâche</NavLink>
        </nav>
    );
}

export default Navbar;