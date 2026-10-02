// server without express

const http = require('http');

const fruits = ["apple", "river", "laptop", "cloud", "guitar", "pixel", "mountain", "coffee", "rocket", "notebook"];

const app = http.createServer((req,res) => {
    if(req.method === 'GET' && req.url === '/fruits'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: fruits }));
    } else if (req.method === 'POST' && req.url === '/fruits'){
        let body = '';
        req.on('data', chunk => {
            body += chunk;
        });
        req.on('end', () => {
            const data = JSON.parse(body);
            fruits.push(data.name);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: `Received data: ${JSON.stringify(data)}` }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
