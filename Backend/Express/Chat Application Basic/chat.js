const express = require('express');
const router = express.Router();


router.post('/message', (req, res, next) => {
    console.log(`${req.body.username} : ${req.body.message}`);
    require('fs').writeFile('message.txt', `${req.body.username} : ${req.body.message} || `, { flag: 'a' }, (error) => {
        error ? console.log(error) : res.redirect('/');
    });
});


router.get('/login', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
</head>

<body style="text-align: center;">
    <br><br><br><br>
    <form action="/" onsubmit="localStorage.setItem('username', document.querySelector('#username-el').value)" method = "POST">
        <input type="text"  name="username" id="username-el" placeholder="username"><br>
        <button type="submit" class = "btn btn-danger">LOGIN</button>
    </form>
</body>

</html>
    `);
});

router.post('/', (req, res, next) => {
    res.send(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
</head>

<body style="text-align: center;">
    <br><br><br><br>
    <form action="/message" id="form-el" onsubmit="document.querySelector('#username-el').value = localStorage.getItem('username')" method="POST">
        <input type="text" name="message" id="message-el" placeholder="message">
        <input type="hidden" name="username" id="username-el"><br>
        <button type="submit" class="btn btn-warning">SEND</button>
    </form>
</body>

</html>
    `);
});

router.get('/', (req, res, next) => {
    require('fs').readFile('message.txt', (error, data) => {
        if (error) {
            console.log(error);
            data = 'No Chat Available...';
        }
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>LOGIN</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
        </head>
        
        <body style="text-align: center;">
            <br><br>
            ${data}
            <br><br>
            <form action="/message" id="form-el" onsubmit="document.querySelector('#username-el').value = localStorage.getItem('username')" method="POST">
                <input type="text" name="message" id="message-el" placeholder="message">
                <input type="hidden" name="username" id="username-el"><br>
                <button type="submit" class="btn btn-warning">SEND</button>
            </form>
        </body>
        
        </html>
    `);
    });
});

module.exports = router;
