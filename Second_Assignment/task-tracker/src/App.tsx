import { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { TaskDetail } from './components/TaskDetail';
import type { Task } from './types/task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React Lists', completed: true },
    { id: 2, title: 'Understand Keys', completed: false },
    { id: 3, title: 'Implement Filters', completed: false },
  ]);

  return (
    <HashRouter>
      <div>
        <h1>Task Tracker</h1>
        <nav style={{ marginBottom: '1rem' }}>
          <Link to="/" style={{ marginRight: '10px' }}>
            Home
          </Link>
          <Link to="/tasks">Tasks</Link>
        </nav>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<p>Welcome to the Home Page!</p>} />
            <Route
              path="/tasks"
              element={<TaskList tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/tasks/:taskId"
              element={<TaskDetail tasks={tasks} />}
            />
            <Route path="*" element={<p>404 - Page Not Found</p>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
