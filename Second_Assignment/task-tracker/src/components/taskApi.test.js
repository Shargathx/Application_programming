import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../../app.js';

describe('Task API Integration Tests with Utilities', () => {
  it('GET /api/tasks returns tasks successfully', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST /api/tasks creates a valid task', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({ title: 'Test task utilities integration' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe('Test task utilities integration');
    expect(response.body.completed).toBe(false);
  });

  it('POST /api/tasks rejects an empty title with 400', async () => {
    const response = await request(app).post('/api/tasks').send({ title: '' });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });

  it('GET /api/tasks/:id returns 404 for an unknown task ID', async () => {
    const response = await request(app).get('/api/tasks/99999');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Task not found');
  });

  it('DELETE /api/tasks/:id removes a task', async () => {
    const createRes = await request(app)
      .post('/api/tasks')
      .send({ title: 'Task to be deleted' });

    const taskId = createRes.body.id;

    const deleteRes = await request(app).delete(`/api/tasks/${taskId}`);
    expect(deleteRes.status).toBe(204);

    const getRes = await request(app).get(`/api/tasks/${taskId}`);
    expect(getRes.status).toBe(404);
  });
});
