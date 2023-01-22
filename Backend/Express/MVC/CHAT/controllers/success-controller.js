const path = require('path')
const dirName = require(path.join(__dirname, '..', 'util', 'path'));

exports.postSuccess = (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", 'success.html'));
}