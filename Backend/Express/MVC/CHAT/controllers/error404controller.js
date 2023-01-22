const path = require('path');
const dirName = require('../util/path');

exports.Error = (req, res, next) => {
    res.status(404).sendFile(path.join(dirName, 'views', '404.html'));
}