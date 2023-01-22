const express = require('express');
const path = require('path');
const contactUsController = require(path.join(__dirname, '..', 'controllers', 'contact-us-controller'));
const successController = require(path.join(__dirname, '..', 'controllers', 'success-controller'));

const Router = express.Router();

Router.get('/contact-us', contactUsController.getContactUs);

Router.post('/success', successController.postSuccess);

module.exports = Router;