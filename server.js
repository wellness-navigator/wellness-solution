
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const COUNT_FILE = path.join(__dirname, 'count.json');

// Initialize count file if not exists
if (!fs.existsSync(COUNT_FILE)) {
    fs.writeFileSync(COUNT_FILE, JSON.stringify({ count: 1204 })); // Start with a fake plausible number
}

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.json': 'application/json',
};

const server = http.createServer((req, res) => {
    console.log(`Request: ${req.url}`);

    // API: Get Count
    if (req.url === '/api/count' && req.method === 'GET') {
        const data = fs.readFileSync(COUNT_FILE);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
        return;
    }

    // API: Increment Count
    if (req.url === '/api/count' && req.method === 'POST') {
        let data = JSON.parse(fs.readFileSync(COUNT_FILE));
        data.count += 1;
        fs.writeFileSync(COUNT_FILE, JSON.stringify(data));

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
        return;
    }

    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    // Clean up query parameters for file serving
    if (filePath.includes('?')) {
        filePath = filePath.split('?')[0];
    }

    const extname = path.extname(filePath);
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                res.writeHead(404);
                res.end('404 File Not Found');
            } else {
                res.writeHead(500);
                res.end('500 Internal Server Error: ' + error.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
