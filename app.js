// Servidor básico con Node.js puro
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Este es un proyecto básico de Node para CI/CD.');
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});