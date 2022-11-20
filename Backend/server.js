//http  ==> Launch a Server
//https ==> Launch a SSL security encrippted Server

const http = require('http'); //Way to import files in NodeJS

const server = http.createServer((request, response) => {
    // console.log(request.url, request.method, request.headers);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
        <html>
        <body style="text-align: center">
        <header>
            <h2>Welcome</h2>
        </header>
        <h3>Abhinab</h3>
        </body>
        </html>
    `);
    response.end();
});

server.listen(4000);
