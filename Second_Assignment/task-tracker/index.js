import {
  getAllTasks,
  getTaskById,
  getCompletedTasks,
} from './src/components/taskUtils.js';

const tasks = [
  { id: 1, title: 'Learn React Testing', completed: true },
  { id: 2, title: 'Master Node.js Basics', completed: false },
];

console.log('Hello! Welcome to the Node.js Task Tracker Environment.');
console.log('--- Current Task List ---');

const allTasks = getAllTasks(tasks);
allTasks.forEach((task) => {
  const status = task.completed ? 'Completed' : 'Not completed';
  console.log(`[ID: ${task.id}] ${task.title} - Status: ${status}`);
});

console.log('--- Get Task By ID (ID: 2) ---');
console.log(getTaskById(tasks, 2));

console.log('--- Completed Tasks ---');
console.log(getCompletedTasks(tasks));
