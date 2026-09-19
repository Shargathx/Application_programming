import { useState } from 'react';
import './TaskCard.css';
import type { Task } from '../types/task'; // Make sure path matches your types folder

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const [isCompleted, setIsCompleted] = useState<boolean>(
    task.completed ?? false,
  );

  const handleToggle = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Status: {isCompleted ? 'Completed' : 'Not completed'}</p>
      <button onClick={handleToggle}>Toggle Button</button>
    </div>
  );
}