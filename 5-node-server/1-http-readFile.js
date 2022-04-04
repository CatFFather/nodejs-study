const http = require('http');
const fs = require('fs');

const server = http
    .createServer((req, res) => {
        const url = req.url;
        if (url === '/') {
            fs.readFile('./html/index.html', (err, data) => {
                console.log('index');
                res.setHeader('Content-Type', 'text/html');
                res.write(data);
                res.end();
            });
        } else if (url === '/courses') {
            fs.readFile('./html/courses.html', (err, data) => {
                console.log('courses');
                res.setHeader('Content-Type', 'text/html');
                res.write(data);
                res.end();
            });
        } else {
            fs.readFile('./html/not-found.html', (err, data) => {
                console.log('not-found');
                res.setHeader('Content-Type', 'text/html; charset=UTF-8');
                res.write(data);
                res.end();
            });
        }
    })
    .listen(8080);
