import type { Task } from '../types/task';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(`${API_URL}/tasks`);

  if (!response.ok) {
    throw new Error('Failed to fetch tasks from server.');
  }

  const data: Task[] = await response.json();
  return data;
}

export async function createTask(title: string): Promise<Task> {
  const response = await fetch(`${API_URL}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to create task.');
  }

  const data: Task = await response.json();
  return data;
}
