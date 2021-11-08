// server.js

// Node.js에 기본 내장되어 있는 http 모듈을 로드한다.
const http = require('http');

// http 모듈의 createServer 메소드를 호출하여 HTTP 서버 생성
function onRequest(request, response) {
    console.log('Request received.');
    response.writeHead(200, {'Content-Type': 'text/plain'}); // (1)
    response.write('Hello World');
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started.');