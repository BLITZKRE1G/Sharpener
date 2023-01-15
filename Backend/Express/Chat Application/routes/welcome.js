const express = require('express');
const path = require('path');
const dirName = require('../util/path');

const Router = express.Router();

Router.get('/', (req, res, next) => {
    res.sendFile(path.join(dirName, "views", 'welcome.html'));
});

module.exports = Router;