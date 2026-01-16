import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Oups ! 404</h1>
            <p>La page que vous cherchez n'existe pas.</p>
            {/* On permet à l'utilisateur de revenir facilement au début */}
            <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
                Retourner à l'accueil
            </Link>
        </div>
    );
}

export default NotFound;