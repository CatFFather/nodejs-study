import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

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

// promises 처리 방법(비동기) --> catch 로 하나씩 다 오류 처리를 해줘야한다.
app.get('/file2', (req, res, next) => {
    fsAsync
        .readFile('/file.txt')
        .then((data) => {})
        .catch((error) => {
            console.log('error', error);
            // next(error); // 다음 미들웨어로 던질 수 있음
            res.status(404).send('File not found 2');
        });
});

// async await 처리 방법
app.get('/file3', async (req, res) => {
    // 이 미들웨어 자체는 async 가 붙어있기 때문에 promise를 return 한다(비동기)
    try {
        const data = await fsAsync.readFile('/file.txt'); // ← 이 코드 자체는 동기적이다.(await 했기 때문)
    } catch (error) {
        console.log('error3', error);
        res.status(404).send('File not found 3');
    }
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);

// async function number() {
//     return 2;
// }
// function test() {
//     const num = number().then((data) => {
//         console.log('data', data);
//     });
// }
// test();
