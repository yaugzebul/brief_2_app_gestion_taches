import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* On va définir nos routes ici */}
                <Routes>
                    <Route path="/" element={<h1>Accueil</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App