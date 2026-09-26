import fs from 'node:fs/promises';

export async function loadTasks(filePath = './tasks.json') {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [
      { id: 1, title: 'Learn React Testing', completed: true },
      { id: 2, title: 'Master Node.js Basics', completed: false },
    ];
  }
}

export async function saveTasks(tasks, filePath = './tasks.json') {
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
}
