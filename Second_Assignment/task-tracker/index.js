import express from 'express';
import {
  getAllTasks,
  getTaskById,
  getCompletedTasks,
} from './src/components/taskUtils.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let tasks = [
  { id: 1, title: 'Learn React Testing', completed: true },
  { id: 2, title: 'Master Node.js Basics', completed: false },
];

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/api/tasks', (req, res) => {
  const { completed } = req.query;

  if (completed !== undefined) {
    if (completed !== 'true' && completed !== 'false') {
      return res.status(400).json({
        error: 'Invalid completed query value. Must be true or false.',
      });
    }

    if (completed === 'true') {
      return res.status(200).json(getCompletedTasks(tasks));
    }

    const uncompletedTasks = tasks.filter((task) => !task.completed);
    return res.status(200).json(uncompletedTasks);
  }

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

  const newTask = {
    id: newId,
    title: title.trim(),
    completed: false,
  };

  tasks.push(newTask);

  return res.status(201).json(newTask);
});

app.patch('/api/tasks/:id', (req, res) => {
  const taskId = Number(req.params.id);
  const task = getTaskById(tasks, taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const { title, completed } = req.body;

  if (title === undefined && completed === undefined) {
    return res.status(400).json({
      error:
        'At least one field (title or completed) must be provided for update.',
    });
  }

  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim() === '') {
      return res
        .status(400)
        .json({ error: 'Title must be a valid non-empty string.' });
    }
    task.title = title.trim();
  }

  // Validate completed if provided
  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res
        .status(400)
        .json({ error: 'Completed status must be a boolean.' });
    }
    task.completed = completed;
  }

  return res.status(200).json(task);
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

console.log('--- Current Task List ---');
const allTasks = getAllTasks(tasks);
allTasks.forEach((task) => {
  const status = task.completed ? 'Completed' : 'Not completed';
  console.log(`[ID: ${task.id}] ${task.title} - Status: ${status}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
