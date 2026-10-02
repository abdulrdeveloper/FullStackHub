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