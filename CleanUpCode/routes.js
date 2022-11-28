const fs = require('fs');

const requestHandler = ((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/' && method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
                <html>
                    <head>
                        <title>First Demo</title>
                    </head>
                    <body style="text-align: center;">  
                        <br>      
                        <h1>Welcome</h1>
                        <br>
                        <p id="paragraph"></p>
                        <ul id = "ul"></ul>
                        <form action="/redirect" method="POST" id="form">
                            <input type="text" name="message" id="input"><br>
                            <input type="submit" value="Done">
                        </form>
                        <script>
                            let paragraph = document.querySelector('#paragraph');
                            let form = document.querySelector("#form");
                            let index = localStorage.length;
                            let val;
                            form.addEventListener('submit', ()=>{
                                val = document.querySelector('#input').value;
                                localStorage.setItem('data', val);
                            });
                            // paragraph.appendChild(document.createTextNode(val));
                            val = localStorage.getItem('data');
                            paragraph.innerText = val;
                        </script>
                    </body>
                </html>
            `);
        return res.end();
    } else if (url === '/redirect' && method === "POST") {
        const responseBody = [];

        req.on('data', (dataChunks) => {
            responseBody.push(dataChunks);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(responseBody).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('first.txt', message, error => {
                res.statusCode = 302;
                res.setHeader('Location', '/')
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
                <html>
                    <head>
                        <title>First Demo</title>
                    </head>
                    <body style="text-align: center;">  
                        <br>      
                        <h1>Welcome to This Node!</h1>
                    </body>
                </html>
            `);
    return res.end();
});

// module.exports = {
//     handler: requestHandler,
//     text: 'Hard Coded Text'
// };

module.exports.handler = requestHandler;
exports.text = 'Hard Coded Text';
