const httpServer = require('http');

const express = require('express');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const model = express();
const bodyParser = require('body-parser');

model.use(bodyParser.urlencoded());

model.use(adminRoutes);
model.use(shopRoutes);

model.use((req, res, next) => {
    res.status(404).send(`<h1>[404] Page not Found</h1>`);
});


const server = httpServer.createServer(model);
server.listen(8080);
