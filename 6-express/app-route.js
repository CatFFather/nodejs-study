import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json()); // REST API --> Body Parsing
app.use(express.urlencoded({ extended: false })); // HTML Form --> Body Parsing
// HTML Form 에서 submit 시 자동으로 reqest 발생 그 때 전달된 HTML 에서 만든 데이터를 body에 자동으로 parsing 해준다.

const options = {
    dotfiles: 'ignore',
    etag: false,
    index: false,
    maxAge: 'id',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    },
};

app.use(express.static('public', options));
app.use('/posts', postRouter);
app.use('/users', userRouter);

// app.route('/posts')
//     .get((req, res, next) => {
//         res.status(201).send('GET: /posts');
//     })
//     .post((req, res, next) => {
//         res.status(201).send('POST: /posts');
//     });

// app.route('/posts/:id')
//     .put((req, res, next) => {
//         res.status(201).send('PUT: /posts/:id');
//     })
//     .delete((req, res, next) => {
//         res.status(201).send('DELETE: /posts/:id');
//     });

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);
