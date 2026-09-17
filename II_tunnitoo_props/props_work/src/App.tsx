import { TaskCard } from "./assets/TaskCard";
import type { Task } from './assets/components/Task';

export default function App() {
  const task1: Task = {
    title: 'Setup Vite + React environment',
    isCompleted: true,
  };

  const task2: Task = {
    title: 'Implement component props testing',
    isCompleted: false,
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Task Overview</h2>
      <TaskCard task={task1} />
      <TaskCard task={task2} />
    </div>
  );
}