import express from 'express';
import {
  getAllTasks,
  getTaskById,
  getCompletedTasks,
} from './src/components/taskUtils.js';

const app = express();
const PORT = process.env.PORT || 3000;

const tasks = [
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

console.log('--- Current Task List ---');
const allTasks = getAllTasks(tasks);
allTasks.forEach((task) => {
  const status = task.completed ? 'Completed' : 'Not completed';
  console.log(`[ID: ${task.id}] ${task.title} - Status: ${status}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
