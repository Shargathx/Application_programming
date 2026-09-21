import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { TaskCard } from '../../src/components/TaskCard';
import type { Task } from '../../src/types/task';

describe('TaskCard Component', () => {
  const mockTask: Task = {
    id: 1,
    title: 'Learn React Testing',
    completed: false,
  };

  it('renders the task title correctly', () => {
    render(
      <BrowserRouter>
        <TaskCard task={mockTask} onToggle={() => {}} onDelete={() => {}} />
      </BrowserRouter>,
    );

    const titleElement = screen.getByText('Learn React Testing');
    expect(titleElement).toBeDefined();
  });

  it('calls onToggle callback when the toggle button is clicked', async () => {
    const handleToggle = vi.fn();
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <TaskCard task={mockTask} onToggle={handleToggle} onDelete={() => {}} />
      </BrowserRouter>,
    );

    const toggleButton = screen.getByRole('button', { name: /toggle button/i });

    await user.click(toggleButton);
    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(mockTask.id);
  });
});
