import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx"; // Attention à la majuscule si tu renommes le fichier
import TaskDetail from "./pages/TaskDetail.jsx";
import NewTask from "./pages/NewTask.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tache/:id" element={<TaskDetail />} />
                    <Route path="/nouveau" element={<NewTask />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App