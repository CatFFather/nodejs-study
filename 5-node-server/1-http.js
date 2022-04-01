const http = require('http');
// const http2 = require('http2')
/*
    http2는 모든 브라우저에서 https와 함께 적용이 된다. 
    개발 pc에는 https를 위한 ssl certificate 가 없다. 
    받아서 브라우저에 인증하면 되지만 개발 단계에서는 복잡할 수 있으므로 
    배울 때는 http 모듈로 배우고 배포할 때 http2로 변경 예정
    크게 인터페이스가 다르지 않기 때문에 http로 배우고 사용해도 괜찮다.
 */

// console.log('http.STATUS_CODES : ', http.STATUS_CODES); // 상태 코드 확인
// console.log('http.METHODS : ', http.METHODS); // 메소드 확인

// 서버 생성 (옵션을 줄 수도 있고 listener를 등록 할 수 있다.)
// listener는 요청(req)이 오고, 반응(res)할 때 우리가 사용할 수 있는 객체도 전달 해준다.
const server = http.createServer((req, res) => {
    console.log('incoming.....');
    console.log('req.httpVersion : ', req.httpVersion);
    console.log('req.method : ', req.method);
    console.log('req.url : ', req.url);
    console.log('req.headers : ', req.headers);
    // 요청에 대한 응답을 해줘야 한다.
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Academy</title></head>');
        res.write('<body><h1>Welcome!</h1></body>');
        res.write('</html>');
    } else if (url === '/courses') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello</title></head>');
        res.write('<body><h1>Courses!</h1></body>');
        res.write('</html>');
    } else {
        res.setHeader('Content-Type', 'text/html; charset=UTF-8');
        res.write('<html>');
        res.write('<head><title>Hello</title></head>');
        res.write('<body><h1>Not Found!</h1></body>');
        res.write('</html>');
    }
    res.end(); // response를 끝내줘야 한다.
    // ※ 해당하는 요청에 맞게 해당하는 데이터를 써주고 끝내주면 된다.
});

// 만든 server의 listen을 등록 해줘야 서버가 동작한다. (어떤 port에 들을것인지 작성 서버에도 여러 프로그램 마다 각기 다른 port를 사용)
server.listen(8080);
// JAVA에서 서버를 돌리기 위해서는 아파치나 부가적인 것들을 설치 해야 했지만 node에서는 이정도만 작성해도 서버로 동작이 가능하다.
