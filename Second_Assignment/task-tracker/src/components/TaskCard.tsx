import { Link } from 'react-router-dom';
import './TaskCard.css';
import type { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <div className="task-card">
      <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      </h3>
      <p>Status: {task.completed ? 'Completed' : 'Not completed'}</p>
      <button onClick={() => onToggle(task.id)}>Toggle Button</button>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          marginLeft: '8px',
          backgroundColor: '#ff4d4d',
          color: 'white',
          border: 'none',
          padding: '4px 8px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Delete
      </button>
    </div>
  );
}
