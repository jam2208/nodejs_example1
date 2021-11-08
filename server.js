// test

const http = require('http');


http.createServer(function (request, response) {
    const baseUrl = 'http://' + request.headers.host + '/';
    const newUrl = new URL(request.url, baseUrl);

    const pathname = newUrl.pathname;
    console.log('Path name is' + pathname);

    const query = newUrl.searchParams;
    console.log('Request parameter is ', query);

    response.writeHead(200, {'Content-Type': 'text/html'}); // (1)
    response.write(
        '<h1>Path name is' + pathname + '</h1>' +
        '<h1>Request parameter is ' + query + '</h1>'
    );
    response.end();
}).listen(8888);

console.log('Server has started')