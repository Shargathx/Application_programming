export function getAllTasks(tasks) {
  return [...tasks];
}

export function getTaskById(tasks, id) {
  if (!tasks || tasks.length === 0) return undefined;
  return tasks.find((task) => task.id === id);
}

export function getCompletedTasks(tasks) {
  if (!tasks) return [];
  return tasks.filter((task) => task.completed);
}
