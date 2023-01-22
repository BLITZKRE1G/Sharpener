const path = require('path');
exports.getLogin = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', "views", 'login.html'));
}