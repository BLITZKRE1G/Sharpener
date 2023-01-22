const path = require('path');
const dirName = require(path.join(__dirname, '..', 'util', 'path'));

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(dirName, 'views', 'contactUs.html'));
}