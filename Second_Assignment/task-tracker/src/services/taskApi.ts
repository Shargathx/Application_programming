import type { Task } from '../types/task';

export async function getTasks(): Promise<Task[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}tasks.json`);

  if (!response.ok) {
    throw new Error('Failed to fetch tasks from server.');
  }

  const data: Task[] = await response.json();
  return data;
}
