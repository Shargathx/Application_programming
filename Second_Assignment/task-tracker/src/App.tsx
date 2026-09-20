import { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { TaskDetail } from './components/TaskDetail';
import { PageSection } from './components/PageSection'; // <-- Import PageSection
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
            <Route
              path="/"
              element={
                <PageSection title="Welcome">
                  <p>Welcome to the Home Page!</p>
                </PageSection>
              }
            />
            <Route
              path="/tasks"
              element={
                <PageSection title="My tasks">
                  <TaskList tasks={tasks} setTasks={setTasks} />
                </PageSection>
              }
            />
            <Route
              path="/tasks/:taskId"
              element={
                <PageSection title="Task Details">
                  <TaskDetail tasks={tasks} />
                </PageSection>
              }
            />
            <Route
              path="*"
              element={
                <PageSection title="Not Found">
                  <p>404 - Page Not Found</p>
                </PageSection>
              }
            />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
