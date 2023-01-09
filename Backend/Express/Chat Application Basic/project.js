const http = require('http');

const chatApp = require('./routes/chat');

const express = require('express');
const bodyParser = require('body-parser');
const project = express();

project.use(bodyParser.urlencoded());

project.use(chatApp);


project.use((req, res) => {
    res.status(404).send(`<h1>Error 404 Source not Available</h1>`);
});

const server = http.createServer(project);
server.listen(8080);
