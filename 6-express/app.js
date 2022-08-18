import express from 'express'; // 1. express를 가지고 온다.
const app = express(); // 2. express를 이용하여 app 을 만든다.

// 4. 우리가 원하는 http method, 원하는 경로에 미들웨어를 등록해주면 된다.
app.get('/', (req, res, next) => {
    console.log('get');
    res.send('get / 접속');
});

app.listen(8080); // 3. 특정한 PORT 에서 들으면 된다.
// 서버의 IP 주소로 우리의 서버가 네트워크 상에서 어디에 있는지 알 수 있다면
// Port는 그 서버의 어떤 application에 우리가 접속하기를 원하는지를 나타낸다.
// 컴퓨터에는 IP가 있고 여러 개의 port가 있다. 그 port 중에 우리가 관심 있는 application에 듣고 접속할 수 있다.

// 하단 api는 https://expressjs.com/en/4x/api.html 공식 문서 참고

// ※자주 사용 하는 application
// 1. 각종 method --> post,get,put,delete
// 2. all, use --> http 모든 method에 대해 듣고 싶을 때 (둘이 차이점이 있음)
// 3. disable, enable --> application에서 어떤 설정을 끄고 켤 때

// ※자주 사용 하는 Request
// 1. req.baseUrl
// 2. req.body
// 3. req.cookies
// 4. req.method
// 5. req.query
// 6. req.ip

// ※자주 사용 하는 Response
// 1. res.append()
// 2. res.cookie()
// 3. res.json
// 4. res.redirect()
// 5. res.send()

// ※ Router
