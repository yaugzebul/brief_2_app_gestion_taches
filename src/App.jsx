import { useState } from "react"; // 1. Vérifie bien cet import !
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import TaskDetail from "./pages/TaskDetail.jsx";
import NewTask from "./pages/NewTask.jsx";
import NotFound from "./pages/NotFound.jsx";
import NavLinks from "./components/NavBar.jsx";

function App() {
    // 2. On crée l'état (la liste et sa télécommande)
    const [tasks, setTasks] = useState([
        { id: 1, title: "Apprendre React Router", description: "Comprendre le fonctionnement des routes." },
        { id: 2, title: "Créer une Navbar", description: "Utiliser NavLink pour naviguer." }
    ]);

    // 3. La fonction DOIT être ici pour pouvoir utiliser "setTasks"
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        // On utilise .filter() pour garder toutes les tâches SAUF celle qui a cet ID
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <BrowserRouter>
            <div className="App">
                <NavLinks />
                <Routes>
                    <Route path="/" element={<Home tasks={tasks} onDeleteTask={deleteTask} />} />
                    <Route path="/tache/:id" element={<TaskDetail tasks={tasks} />} />

                    {/* On passe bien la fonction à NewTask */}
                    <Route path="/nouveau" element={<NewTask onAddTask={addTask} />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;