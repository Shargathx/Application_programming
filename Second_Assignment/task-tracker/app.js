import express from 'express';
import cors from 'cors';
import { getAllTasks, getTaskById } from './src/components/taskUtils.js';
import { loadTasks, saveTasks } from './src/services/taskStorage.js';

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: 'Learn React Testing', completed: true },
  { id: 2, title: 'Master Node.js Basics', completed: false },
];

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/tasks', (req, res) => {
  res.status(200).json(getAllTasks(tasks));
});

app.get('/api/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const task = getTaskById(tasks, taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.status(200).json(task);
});

app.post('/api/tasks', (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({
      error: 'Title is required and must be a valid non-empty string.',
    });
  }

  const newId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const newTask = { id: newId, title: title.trim(), completed: false };
  tasks.push(newTask);

  return res.status(201).json(newTask);
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const task = getTaskById(tasks, taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks = tasks.filter((t) => t.id !== taskId);
  return res.status(204).send();
});

app.use((req, res) => {
  res.status(404).json({ error: 'Task not found' });
});

export default app;
