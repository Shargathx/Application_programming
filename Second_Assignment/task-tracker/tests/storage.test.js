import { describe, it, expect } from 'vitest';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { saveTasks, loadTasks } from '../src/services/taskStorage.js';

describe('Temporary File Storage Persistence', () => {
  it('saves, loads, matches tasks using a temporary directory, and cleans up', async () => {
    const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'task-test-'));
    const filePath = path.join(tmpDir, 'tasks.json');

    const originalTasks = [
      { id: 1, title: 'First temporary task', completed: false },
      { id: 2, title: 'Second temporary task', completed: true },
    ];

    try {
      await saveTasks(originalTasks, filePath);

      const loadedTasks = await loadTasks(filePath);

      expect(loadedTasks).toEqual(originalTasks);
    } finally {
      await fs.rm(tmpDir, { recursive: true, force: true });
    }
  });
});
