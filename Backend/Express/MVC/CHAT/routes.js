const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const loginRouter = require('./routes/login');
const chatRouter = require('./routes/chat');
const welcomeRouter = require('./routes/welcome');
const errorRouter = require('./routes/error');
const contactUsRouter = require('./routes/contact-us');

const path = require('path');
// const path = require('./util/path');

const project = express();
project.use(express.static(path.join(__dirname, 'public')));
project.use(bodyParser.urlencoded({ extended: false }));

project.use(loginRouter);
project.use(chatRouter);
project.use(welcomeRouter);
project.use(contactUsRouter);
project.use(errorRouter);

const server = http.createServer(project);
server.listen(8080);