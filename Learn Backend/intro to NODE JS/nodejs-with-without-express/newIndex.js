// server with express

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"];

app.get('/planets', (_req, res) => {
    res.status(200).json({ message: planets });
});

app.post('/planets', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    planets.push(name);
    res.status(200).json({ message: `Received data: ${JSON.stringify(req.body)}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

/*
Focus on the business logic; Express handles the rest (routing, parsing, responses).

Core concepts (routing, middleware, request/response, status codes) are almost the same across Node.js frameworks, so learning Express makes it easy to pick up others.

Similar to Express (easy switch):
1. Fastify
2. Hono
3. Koa

Somewhat different style:
4. Elysia (built for Bun, type-focused)
5. hapi (config-object style routes)

Different approach (extra concepts to learn):
6. NestJS (decorators, dependency injection; runs on top of Express or Fastify)
7. AdonisJS (full MVC framework)
8. Sails.js
9. FeathersJS
10. LoopBack

Not Express alternatives:
- Bun is a JavaScript runtime (like Node.js), not a framework. Express, Hono and Elysia can run on it.
- SvelteKit is a full-stack frontend framework built on Svelte, not a backend framework like Express.

Express is still the most popular and widely used framework for building web apps in Node.js.
*/