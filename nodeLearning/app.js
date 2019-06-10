const http = require("http");

const routes = require('./routes');

// const rqListener = (req, res) => {}; // This function will run for every request made to the server

const server = http.createServer(routes.handler);

server.listen(3001);
