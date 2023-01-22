const fileSystem = require('fs');
const path = require('path');

exports.postChat = (req, res, next) => {
    fileSystem.readFile('messages.txt', (error, data) => {
        if (error) {
            data = 'No Chats available';
        }
        // console.log(Buffer.concat(data).toString());
        res.sendFile(path.join(__dirname, "..", "views", "chat.html"), { data: data });
    });
}

exports.getChat = (req, res, next) => {
    // res.sendFile(path.join(__dirname, "..", "views", "chat.html"));
    fileSystem.readFile('messages.txt', (error, data) => {
        if (error) {
            data = 'No Chats available';
        }
        res.send(`
        <!DOCTYPE html>
        <html lang="en">    
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Chat</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
                <link rel="shortcut icon" href="/icon/favicon.ico" type="image/x-icon">
                <style>
                    .body {
                        margin: 0;
                        padding: 0;
                        /* font-family: sans-serif; */
                    }
            
                    .main {
                        padding: 1rem;
                    }
            
                    .main-header {
                        width: 100%;
                        height: 3.5rem;
                        background-color: #e6ba2c;
                        padding: 0 1.5rem;
                    }
            
                    .main-header__item-list {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        display: flex;
                    }
            
                    .main-header__item {
                        margin: 0 1rem;
                        padding: 0;
                    }
            
                    .main-header__item a {
                        text-decoration: none;
                        color: black;
                    }
            
                    .main-header__item a:hover,
                    .main-header__item a:active {
                        color: rgb(238, 88, 19);
                        font-size: 1.2rem;
                    }
            
                    .main-header__nav {
                        height: 100%;
                        display: flex;
                        align-items: center;
                    }
            
                    .form-control-sm {
                        margin: 1rem 0;
                    }
            
            
                    .form-control-sm input {
                        display: block;
                        font-size: large;
                        width: 100%;
                        border: 1px solid #e6ba2c;
                        font: inherit;
                        border-radius: 4px;
                        margin: 0.2rem 0;
                        font-size: large;
                    }
            
                    button {
                        font: inherit;
                        border: 2px solid#e6ba2c;
                        color: #e6ba2c;
                        border-radius: 4px;
                        background: white;
                        font-size: large;
                        /* cursor: pointer; */
                    }
            
                    button:hover,
                    button:active {
                        background-color: #e6ba2c;
                        color: white;
                    }
            
                    .login-form {
                        width: 30rem;
                        max-width: 90%;
                        margin: auto;
                    }
            
                    .chat-form {
                        width: 30rem;
                        max-width: 90%;
                        margin: auto;
                    }
                </style>
            </head>        
            <body style="text-align: center;">
                <header class="main-header">
                    <nav class="main-header__nav">
                        <ul class="main-header__item-list">
                            <li class="main-header__item">
                                <a class="active" href="/login">Login</a>
                            </li>
                            <li class="main-header__item">
                                <a href="/chat">CHAT</a>
                            </li>
                            <li class="main-header__item">
                                <a href="/contact-us">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <br><br><br><br><br>
                <h5 id="messages-el">${data}</h5>
                <form class="chat-form" action="/message" method="POST"
                    onclick="document.getElementById('username-el').value = localStorage.getItem('username')">
                    <div class="form-control-sm">
                        <input type="text" name="message" id="message-el" placeholder="Message:">
                        <input type="hidden" name="username" id="username-el">
                        <button type="submit" class="">Send</button>
                    </div>
                </form>
                <script>
                    document.getElementById('messages-el').innerText = data;
                </script>
            </body>        
        </html>
        `);
    });
}

exports.postMessage = (req, res, next) => {
    const message = req.body.username + ' ==> ' + req.body.message + ' || ';
    fileSystem.writeFile('messages.txt', message, { flag: 'a' }, (error) => {
        res.status(303).redirect('/chat');
    });
}
