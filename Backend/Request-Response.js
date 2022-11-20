const httpServer = require('http');

const server = httpServer.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/home') {
        res.write(`
            <html>
            <body style="text-align: center">
                <header>
                    <h2>Welcome</h2>
                </header>
                <h3>Welcome Home</h3>
            </body>
            </html>
    `)
    } else if (req.url == '/about') {
        res.write(`
            <html>
            <body style="text-align: center">
                <header>
                    <h2>Welcome</h2>
                </header>
                <h3>Welcome to About Us Page</h3>
            </body>
            </html>
        `)
    } else if (req.url == '/node') {
        res.write(`
            <html>
            <body style="text-align: center">
                <header>
                    <h2>Welcome</h2>
                </header>
                <h3>Welcome to my Node JS Project</h3>
            </body>
            </html>
    `)
    } else {
        res.write(`
            <html>
            <body style="text-align: center">
                <h3>Welcome to this Node</h3>
            </body>
            </html>
    `)
    }
    res.end();
});

server.listen(4000);
