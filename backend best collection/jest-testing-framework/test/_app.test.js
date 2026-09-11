import request from 'supertest';
import app from '../src/app.js';

test('GET / returns Hello, World!', async () => {
  const response = await request(app).get('/');

  expect(response.status).toBe(200);
  expect(response.text).toBe('Hello, World!');
});