const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        let index = 0;

        res.write(`
            <html>
                <head>
                    <title>Example</title>
                </head>
                <body style="text-align: center;">  
                    <br>      
                    <h1>Welcome</h1>
                    <br>
                    <p id="paragraph"></p>
                    <ul id = "ul"></ul>
                    <form action="/redirect" method="POST" id="form">
                        <input type="text" name="val" id="input"><br>
                        <input type="submit" value="Done">
                    </form>

                    <script>
                        console.log(document.querySelector('body'));
                        console.log('DOCUMENT');
                        let ul = document.querySelector('#ul');
                        let formEl = document.querySelector('#form');
                        let message = '';
                        let para = document.querySelector("#paragraph");
                        
                        index = localStorage.length;
                        console.log('Length: ', index);
                        formEl.addEventListener('submit', () => {
                            message = document.querySelector("#input").value; 
                            localStorage.setItem(\`index${++index}\`, message);
                        });
                        console.log('New Length: ', localStorage.length);
                        console.log(localStorage.getItem(\`index${index}\`));
                        message = localStorage.getItem(\`index${index}\`);
                        let li = document.createElement('li');
                        li.appendChild(document.createTextNode(message));
                        ul.appendChild(li);


                        para.appendChild(document.createTextNode(message));
                        //document.querySelector('body').appendChild(ul);
                    </script>
                </body>
            </html>
        `);
        return res.end();
    } else if (url === '/redirect' && method === 'POST') {
        const dataValue = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            dataValue.push(chunk);
        });

        req.on('end', () => {
            const parsedData = Buffer.concat(dataValue).toString();

            const value = parsedData.split('=')[1];
            console.log(value);

            fs.writeFile('example.txt', value, (error) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
});

server.listen(8080);
