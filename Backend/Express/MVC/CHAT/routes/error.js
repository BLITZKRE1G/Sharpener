const express = require('express');
const path = require('path');
const errorRouter = require(path.join(__dirname, '..', 'controllers', 'error404controller'));

const Router = express.Router();

Router.use(errorRouter.Error);

module.exports = Router;