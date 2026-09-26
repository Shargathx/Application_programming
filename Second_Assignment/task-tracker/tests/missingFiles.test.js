import { describe, it, expect } from 'vitest';
import path from 'path';
import { loadTasks } from '../src/services/taskStorage.js';

describe('Task 14: Handling Missing and Corrupted Data Files', () => {
  it('1. A missing file returns an empty array without creating it', async () => {
    const nonExistentPath = path.resolve('./data/non-existent-tasks.json');
    const tasks = await loadTasks(nonExistentPath);
    expect(tasks).toEqual([]);
  });

  it('2. Invalid JSON produces a clear error', async () => {
    const invalidJsonPath = path.resolve('./data/corrupted-tasks.json');
    await expect(loadTasks(invalidJsonPath)).rejects.toThrow(
      /Corrupted data: Invalid JSON/,
    );
  });

  it('3. Valid JSON that is not an array produces a clear error', async () => {
    const notArrayPath = path.resolve('./data/object-tasks.json');
    await expect(loadTasks(notArrayPath)).rejects.toThrow(
      /Expected a task array/,
    );
  });
});