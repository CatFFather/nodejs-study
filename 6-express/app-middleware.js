import express from 'express';
const app = express();
// app.all() , app.use() 차이점
// all이라고 하면 어떤 http request method로 보내던 항상 callback 함수가 수행이 되는데
// use와의 차이점은 /api/test 로 접속하게되면 처리 되지 않는다. (정확한 경로에만 수행됨 --> /api/* 로 하면 모든 경로 처리가능)
// use는 /sky/test 로 접속 해도 처리 됨
app.all('/api', (req, res, next) => {
    console.log('all');
    next();
});
app.use('/sky', (req, res, next) => {
    console.log('use');
    next();
});

// 우리가 등록한 callback 함수는 누가먼저 등록되는지 순서가 정말 중요하다.
// 동일한 route에 대해서 특정한 처리를 하는 callback 함수를 등록했다면
// 동일한 것에 대해 다시 또 callback 함수를 등록 할 수 있다.
app.get(
    '/',
    (req, res, next) => {
        console.log('first');
        // ※ res로 응답을 해주지 않거나 next()로 다음 middleware로 넘기지 않으면
        // 서버가 반응을 하지 않고 중지된 상태가 된다.
        res.send('Hello'); // 한 번 반응 하고 나면 그 뒤에 이어지는 미들웨어는 호출 되지 않는다. (1번째 send)
        next('route'); // 지금 내 현재 경로에서 함께 등록된 배열을 무시하고 그 다음 미들웨어로 넘어가라고 명령
        // next(new Error('error')); // error를 발생 시킬 수도 있음 별도 처리가 없을 시 error가 사용자에게 전달이됨(맨 하단 에러처리)
        if (true) {
            return res.send('Hello222');
            // Cannot set headers after they are sent to the client 오류 발생
            // --> 클라이언트에게 send 한 후 같은 callback 함수에서 send 하면 안됨 그래서 만약 분기처리하여 send 보낼 때 return을 활용해야한다.
        }
    },
    (req, res, next) => {
        // 이렇게 두개를 한꺼번에 등록 가능
        console.log('first2');
        next();
    }
);
// 동일 url을 따로 등록해도 된다
app.get('/', (req, res, next) => {
    console.log('second');
    res.send('Hello , second'); // 그래서 next로 넘어온 2번째 미들웨어에서 send를 하게 되면 오류가 발생함(2번째 send) --> ※ 동일 url에서는 하나의 send만 하기
});

// 요청한 url이 어떠한 미들웨어에 접근하지 못할 때(처리할 수 없는 경로)
app.use((req, res, next) => {
    res.status(404).send('Not available! @_@');
});

// 에러 처리(중간 중간 에러가 발생하여도 제일 마지막에 있는 미들웨어가 에러 발생시 그 에러에 대해 처리해줌 )
app.use((error, req, res, next) => {
    console.error('error??', error);
    res.status(500).send('Sorry, try later!');
});

app.listen(8080);
