import type { Task } from "./components/Task";

interface TaskCardProps {
  task: Task;
}

export function TaskCard({ task }: TaskCardProps) {
  const { title, isCompleted } = task;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px 0',
      backgroundColor: isCompleted ? '#e6fffa' : '#fff5f5'
    }}>
      <h3 style={{ margin: '0 0 8px 0' }}>{title}</h3>
      <p style={{ margin: 0 }}>
        Status: <strong>{isCompleted ? 'Completed' : 'Pending'}</strong>
      </p>
    </div>
  );
}