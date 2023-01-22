const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fileSystem = require('fs');

const Router = express.Router();
const chatController = require(path.join(__dirname, '..', 'controllers', 'chat-controller'));

Router.post('/message', chatController.postMessage);

Router.post('/chat', chatController.postChat);

Router.get('/chat', chatController.getChat);

module.exports = Router;