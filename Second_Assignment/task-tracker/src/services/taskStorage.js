import fs from 'fs/promises';
import path from 'path';

export async function loadTasks(
  filePath = process.env.TASKS_FILE || './data/tasks.json',
) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [
        { id: 1, title: 'Learn React Testing', completed: true },
        { id: 2, title: 'Master Node.js Basics', completed: false },
      ];
    }
    throw error;
  }
}

export async function saveTasks(
  tasks,
  filePath = process.env.TASKS_FILE || './data/tasks.json',
) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf8');
}
