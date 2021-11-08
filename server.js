// server.js

const http = require('http'); // node.js의 내부모듈

function start() {
    function onRequest(request, response) {
        const baseUrl = 'http://' + request.headers.host + '/';
        const newUrl = new URL(request.url, baseUrl);
        const pathname = newUrl.pathname;
        console.log('Request for ' + pathname + ' received.');
        response.writeHead(200, {'Content-Type': 'text/plain'}); // (1)
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;