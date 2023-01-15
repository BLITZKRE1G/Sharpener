const express = require('express');
const path = require('path');
const dirName = require('../util/path');

const Router = express.Router();

Router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(dirName, 'views', 'contactUs.html'));
});

Router.post('/success', (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", 'success.html'));
});

module.exports = Router;