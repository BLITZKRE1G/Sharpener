const express = require('express');
const router = express.Router();

router.post('/shop/home', (req, res, next) => {
    res.redirect('/admin/addbook');
});

router.get('/shop', (req, res, next) => {
    res.redirect('/admin/addbook');
});

router.get('/', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        <title>Welcome</title>
    </head>
    <body style="text-align: center;">
        <br><br><br><br><br><br><br>
        <h2>Welcome to this Node</h2>
        <br>
        <form action="/shop/home" method="POST">
            <button type="submit" class="btn btn-warning">Add Book</button>
        </form>
        <br><br><br><br>
    </body>
    </html>
    `);
});


module.exports = router;
