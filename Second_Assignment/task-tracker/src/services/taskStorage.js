import fs from 'node:fs/promises';
import path from 'node:path';

export async function loadTasks(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    let parsedData;
    try {
      parsedData = JSON.parse(data);
    } catch (err) {
      throw new Error(
        `Corrupted data: Invalid JSON format in file ${filePath}`,
      );
    }

    if (!Array.isArray(parsedData)) {
      throw new Error(
        `Corrupted data: Expected a task array, but received ${typeof parsedData}`,
      );
    }

    return parsedData;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export async function saveTasks(tasks, filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
}
