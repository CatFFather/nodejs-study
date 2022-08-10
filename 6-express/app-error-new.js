import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';
// require('express-async-errors') // CommonJS module
// 이렇게 import 해주면 자동으로 에러처리를 마지막에 처리해줌
// (현재 express 5버전 beta에서 지원하지만 beta는 프로젝트에서 사용하기 힘들기 때문에 express-async-errors 라이브러리 사용)
import {} from 'express-async-errors';

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('home');
});

app.get('/file1', (req, res, next) => {
    // // 동기 함수는 에러 처리를 위해 try catch 사용
    // try {
    //     const data = fs.readFileSync('/file.txt');
    // } catch (error) {
    //     console.log('error', error);
    //     res.status(404).send('File not found');
    // }

    // readFile 은 비동기 함수(callback 함수 호출)
    fs.readFile('/file1.txt', (err, data) => {
        console.log('err', err);
        // 비동기에서 에러 처리 방법(callback 함수에서 처리)
        if (err) {
            // next(err);
            res.status(404).send('File not found 1');
        }
    });
});

// promises 처리 방법(비동기)
app.get('/file2', (req, res, next) => {
    // 다만 미들웨어에서 promise를 return하는 경우에만 감지해서 error를 제일 마지막에 포착 할 수 있기 때문에
    // 미들웨어 안에서 promise를 사용한다면 꼭 return 을 해줘야 한다.
    return fsAsync.readFile('/file.txt');
});

// async await 처리 방법
app.get('/file3', async (req, res) => {
    // 이 미들웨어 자체는 async 가 붙어있기 때문에 promise를 return 한다(비동기)
    const data = await fsAsync.readFile('/file.txt'); // ← 이 코드 자체는 동기적이다.(await 했기 때문)
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong !!!!?' });
});

app.listen(8080);
