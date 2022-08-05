import express from 'express';
const app = express();

app.get('/', (req, res, next) => {
    console.log('get');
    res.send('Hello World!');
});

app.listen(8080);
