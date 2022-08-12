import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet'; // 보안 관련 header 설정

import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet());

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

// CORS 문제 해결
// 이렇게 사용 가능 하지만 번거롭다.
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//     res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, DELETE');
//     next();
// });
// cors 미들웨어 사용하여 설정
const corsOption = {
    origin: ['http://127.0.0.1:5500'],
    optionsSuccessStatus: 200,
    credentials: true, // Access-Control-Allow-Credentials : true
};
app.use(cors(corsOption));

app.get('/', (req, res, next) => {
    console.log('cookie ? ', req.cookies);
    // console.log('device-id ? ', req.cookies['device-id']);
    // console.log('device-token ? ', req.cookies['device-token']);
    res.status(200).json({ message: 'api 호출 성공!!' });
});

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
