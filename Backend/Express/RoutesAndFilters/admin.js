const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded());

router.post('/admin/redirect', (req, res, next) => {
    console.log(req.body);
    require('fs').writeFile('BookName.pdf', req.body.book, (error) => {
        res.redirect('/admin/addbook');
    });
});

router.get('/admin/addbook', (req, res, next) => {
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
        <h2>Welcome</h2>
        <br><br><br><br>
        <form action="/admin/redirect" method="POST" id="form-el">
            <input type="text" name="book" id="book-el" placeholder="Book Name:"><br>
            <button type="submit" class="btn btn-warning">Add Book</button>
        </form>
        <br>
        <ul id="ul-el"></ul>
        <script>
            // const formElement = document.querySelector("#form-el");
            // const ulElement = document.querySelector("#ul-el");
    
            // // let index;
            // // if (localStorage.length === 0) {
            // //     index = localStorage.length;
            // // } else {
            // //     index = localStorage;
            // // }
    
            // for (let i = 0; i < 20; i++) {
            //     if (localStorage.getItem(i) != null) {
            //         const bookName = JSON.parse(localStorage.getItem(i)).name;
    
            //         const liELement = document.createElement('li');
            //         liELement.id = i;
            //         liELement.appendChild(document.createTextNode(bookName));
    
            //         const delBtn = document.createElement('button');
            //         delBtn.id = 'delete';
            //         delBtn.appendChild(document.createTextNode('Delete'));
            //         delBtn.className = 'btn btn-danger';
    
            //         const editBtn = document.createElement('button');
            //         editBtn.id = 'edit';
            //         editBtn.appendChild(document.createTextNode('Edit'));
            //         editBtn.className = 'btn btn-warning';
    
            //         liELement.appendChild(delBtn);
            //         liELement.appendChild(editBtn);
    
            //         ulElement.appendChild(liELement);
            //     }
            // }
    
            // let index = localStorage.length === 0 ? localStorage.length : ulElement.lastElementChild.id;
            // formElement.addEventListener('submit', (event) => {
            //     event.preventDefault();
    
            //     const bookName = document.querySelector("#book-el").value
            //     console.log(bookName);
            //     const liELement = document.createElement('li');
            //     liELement.id = ++index;
            //     liELement.appendChild(document.createTextNode(bookName));
    
            //     const delBtn = document.createElement('button');
            //     delBtn.id = 'delete';
            //     delBtn.appendChild(document.createTextNode('Delete'));
            //     delBtn.className = 'btn btn-danger';

            //     const editBtn = document.createElement('button');
            //     editBtn.id = 'edit';
            //     editBtn.appendChild(document.createTextNode('Edit'));
            //     editBtn.className = 'btn btn-warning';
    
            //     liELement.appendChild(delBtn);
            //     liELement.appendChild(editBtn);
    
            //     ulElement.appendChild(liELement);
    
            //     const book = {
            //         name: bookName
            //     };
    
            //     localStorage.setItem(\`\${ index }\`, JSON.stringify(book));
            // })
    
            // ulElement.addEventListener('click', (event) => {
            //     if (event.target.id === 'delete') {
            //         const li = event.target.parentElement;
            //         ulElement.removeChild(li);
            //         localStorage.removeItem(li.id);
            //     }else if (event.target.id === 'edit') {
            //         const li = event.target.parentElement;
            //         ulElement.removeChild(li);
            //         localStorage.removeItem(li.id);
    
            //         const bookName = document.querySelector("#book-el").value
            //         console.log(bookName);
            //         const liELement = document.createElement('li');
            //         liELement.id = index;
            //         liELement.appendChild(document.createTextNode(bookName));
    
            //         const delBtn = document.createElement('button');
            //         delBtn.id = 'delete';
            //         delBtn.appendChild(document.createTextNode('Delete'));
            //         delBtn.className = 'btn btn-danger';
    
            //         const editBtn = document.createElement('button');
            //         editBtn.id = 'edit';
            //         editBtn.appendChild(document.createTextNode('Edit'));
            //         editBtn.className = 'btn btn-warning';
    
            //         liELement.appendChild(delBtn);
            //         liELement.appendChild(editBtn);
    
            //         ulElement.appendChild(liELement);
    
            //         const book = {
            //             name: bookName
            //         };
    
            //         localStorage.setItem(\`\${ index }\`, JSON.stringify(book));
            //     }
            // });
        </script>
    </body>
    </html>
    `);
});


module.exports = router;
