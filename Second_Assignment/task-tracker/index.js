const taskData = [
  { id: 1, title: 'Learn React Testing', completed: true },
  { id: 2, title: 'Master Node.js Basics', completed: false },
];

console.log('Hello! Welcome to the Node.js Task Tracker Environment.');
console.log('--- Current Task List ---');

taskData.forEach((task) => {
  const status = task.completed ? 'Completed' : 'Not completed';
  console.log(`[ID: ${task.id}] ${task.title} - Status: ${status}`);
});
