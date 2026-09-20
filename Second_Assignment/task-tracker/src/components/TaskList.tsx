import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { TaskForm } from './TaskForm';
import type { Task } from '../types/task';

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Learn React Lists', completed: true },
    { id: 2, title: 'Understand Keys', completed: false },
    { id: 3, title: 'Implement Filters', completed: false },
  ]);

  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all',
  );

  const handleAddTask = (trimmedTitle: string) => {
    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const handleToggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        ))
      )}
    </div>
  );
}
