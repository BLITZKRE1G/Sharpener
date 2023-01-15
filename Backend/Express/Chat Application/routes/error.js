const express = require('express');
const path = require('path');
const dirName = require('../util/path');

const Router = express.Router();

Router.use((req, res, next) => {
    res.status(404).sendFile(path.join(dirName, 'views', '404.html'));
});

module.exports = Router;