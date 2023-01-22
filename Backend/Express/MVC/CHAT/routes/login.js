const express = require('express');
const path = require('path');
const loginController = require(path.join(__dirname, '..', 'controllers', 'login-controller'));
const Router = express.Router();

Router.get('/login', loginController.getLogin);

module.exports = Router;