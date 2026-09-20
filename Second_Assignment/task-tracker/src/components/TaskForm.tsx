import { useState } from 'react';
import type { FormEvent } from 'react';

interface TaskFormProps {
  onAddTask: (title: string) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('Task title cannot be empty.');
      return;
    }

    setError('');
    onAddTask(trimmedTitle);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
      <div>
        <label htmlFor="task-title" style={{ marginRight: '0.5rem' }}>
          New Task:
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError('');
          }}
          placeholder="Enter task title..."
        />
        <button type="submit" style={{ marginLeft: '0.5rem' }}>
          Add Task
        </button>
      </div>
      {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
    </form>
  );
}
