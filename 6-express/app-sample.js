import express from 'express';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/api', (req, res, next) => {
    console.log('all');
    next();
});
app.use('/sky', (req, res, next) => {
    console.log('use');
    next();
});

app.get(
    '/',
    (req, res, next) => {
        console.log('first');
        next(new Error('error'));
        res.send('Hello');
    },
    (req, res, next) => {
        console.log('first2');
        next();
    }
);
app.get('/', (req, res, next) => {
    console.log('second');
});

app.post('/users', (req, res, next) => {
    console.log('req.body', req.body);
    res.status(201).send('유저 등록 성공');
});

app.get('/users/:id/nicknames/:nickname', (req, res, next) => {
    // console.log('req.path : ', req.path);
    // console.log('req.headers : ', req.headers);
    console.log('req.params : ', req.params);
    console.log('req.params.id : ', req.params.id);
    console.log('req.query : ', req.query);
    console.log('req.query.keyword : ', req.query.keyword);
    // res.sendStatus(200); // status code 설정
    // res.status(200).send('Hello World!!!'); // status code 랑 데이터 설정
    // res.send('Hello World!');
    res.setHeader('key', 'value');
    res.json({ ...req.params, ...req.query, name: 'test' });
});

app.use((req, res, next) => {
    res.status(404).send('404 Not available!@_@');
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('500 Sorry, try later!');
});
app.listen(8080);
