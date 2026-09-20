import { useState, useEffect } from 'react';
import { TaskCard } from './TaskCard';
import { TaskForm } from './TaskForm';
import { getTasks } from '../services/taskApi';
import type { Task } from '../types/task';
import type { Dispatch, SetStateAction } from 'react';

interface TaskListProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export function TaskList({ tasks, setTasks }: TaskListProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>(
    'all',
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let isMounted = true;

    getTasks()
      .then((data) => {
        if (isMounted) {
          setTasks(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [setTasks]);

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

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

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
