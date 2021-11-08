// server.js

// Node.js에 기본 내장되어 있는 http 모듈을 로드한다.
const http = require('http');

// http 모듈의 createServer 메소드를 호출하여 HTTP 서버 생성
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'}); // (1)
    response.write('Hello World');
    response.end();
}).listen(8888);
