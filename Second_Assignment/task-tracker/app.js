import express from 'express';
import cors from 'cors';
import { loadTasks, saveTasks } from './src/services/taskStorage.js';
import { getAllTasks, getTaskById } from './src/components/taskUtils.js';

export function createApp(
  storagePath = process.env.TASKS_FILE || './data/tasks.json',
) {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.get('/api/tasks', async (req, res) => {
    const tasks = await loadTasks(storagePath);
    res.status(200).json(getAllTasks(tasks));
  });

  app.get('/api/tasks/:id', async (req, res) => {
    const tasks = await loadTasks(storagePath);
    const taskId = Number(req.params.id);
    const task = getTaskById(tasks, taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task);
  });

  app.post('/api/tasks', async (req, res) => {
    const { title } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({
        error: 'Title is required and must be a valid non-empty string.',
      });
    }

    const tasks = await loadTasks(storagePath);
    const newId =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;

    const newTask = {
      id: newId,
      title: title.trim(),
      completed: false,
    };

    tasks.push(newTask);
    await saveTasks(tasks, storagePath);

    return res.status(201).json(newTask);
  });

  app.delete('/api/tasks/:id', async (req, res) => {
    const tasks = await loadTasks(storagePath);
    const taskId = Number(req.params.id);
    const task = getTaskById(tasks, taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const updatedTasks = tasks.filter((t) => t.id !== taskId);
    await saveTasks(updatedTasks, storagePath);

    return res.status(204).send();
  });

  app.use((req, res) => {
    res.status(404).json({ error: 'Task not found' });
  });

  return app;
}

const app = createApp();
export default app;
