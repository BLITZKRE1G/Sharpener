const http = require('http');
const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded());

app.use('/add-product', (req, res, next) => {
    console.log('In another Middleware');
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body style="text-align: center;"">
        <form action="/product" method="POST">
            <input type="text" name="title1" placeholder="TEXT">
            <input type="text" name="title2" placeholder="TEXT">
            <button type="submit">Add</button>
        </form>
    </body>
    
    </html>
    `);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.title1);
    console.log(req.body.title2);
    require('fs').writeFileSync('content1.txt', req.body.title1);
    require('fs').writeFileSync('content2.txt', req.body.title2);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('In another Middleware');
    res.send(`<h1>Hello from Express</h1>`);
});

const server = http.createServer(app);
server.listen(8080);
