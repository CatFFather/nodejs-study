const http = require('http');
const fs = require('fs');

const server = http
    .createServer((req, res) => {
        const url = req.url;
        // setHeader 와 writeHead 차이점이 있음 (강의에서는 setHeader 사용)
        // res.setHeader('Content-Type', 'text/html');
        if (url === '/') {
            console.log('index');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream('./html/index.html').pipe(res);
        } else if (url === '/courses') {
            console.log('courses');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream('./html/courses.html').pipe(res);
        } else {
            console.log('not-found');
            res.writeHead(404, { 'Content-Type': 'text/html' });
            fs.createReadStream('./html/not-found.html').pipe(res);
        }
    })
    .listen(8080);

// // 체이닝 해서 사용 가능
// const data = [];
// fs.createReadStream('./html/index.html', {
//     highWaterMark: 8,
//     encoding: 'utf-8',
// })
//     .on('data', (chunk) => {
//         data.push(chunk);
//     })
//     .on('end', () => {
//         const resHtml = data.join('');
//         res.setHeader('Content-Type', 'text/html');
//         res.write(resHtml);
//         res.end();
//     })
//     .on('error', (error) => {
//         console.log(error);
//     });
