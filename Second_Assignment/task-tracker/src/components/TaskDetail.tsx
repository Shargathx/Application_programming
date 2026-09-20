import { useParams, Link } from 'react-router-dom';
import type { Task } from '../types/task';

interface TaskDetailProps {
  tasks: Task[];
}

export function TaskDetail({ tasks }: TaskDetailProps) {
  const { taskId } = useParams<{ taskId: string }>();

  const numericId = Number(taskId);
  const task = tasks.find((t) => t.id === numericId);

  if (!task) {
    return (
      <div>
        <p style={{ color: 'red' }}>Task not found or invalid task ID.</p>
        <Link to="/tasks">Back to Task List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Task Details</h2>
      <p>
        <strong>ID:</strong> {task.id}
      </p>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Status:</strong>{' '}
        {task.completed ? 'Completed' : 'Not completed'}
      </p>
      <Link to="/tasks">Back to Task List</Link>
    </div>
  );
}
