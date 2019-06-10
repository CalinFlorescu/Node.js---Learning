const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>');
        res.write('<header><title>Calin Server</title></header>');
        res.write('<body><h1>Hello from Calin</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send Name</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
       res.write('<html>');
       res.write('<body><ul><li>Adrian Dansatorul</li></ul></body>');
       res.write('</html>');
       return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
           const parsedBody = Buffer.concat(body).toString();
           const message = parsedBody.split('=')[1];
           fs.writeFile('users.txt', message, () => {
               res.statusCode = 302;
               res.setHeader('Location', '/');
               return res.end();
           });
        });
    }
};

module.exports = {
    handler: requestHandler
};