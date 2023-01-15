const express = require('express');
const path = require('path');
const dirName = require('../util/path');

const Router = express.Router();

Router.get('/login', (req, res, next) => {
    res.sendFile(path.join(dirName, "views", 'login.html'));
});

module.exports = Router;