const express = require('express');
const path = require('path');
const dirName = require('../util/path');

const route = express.Router();

route.get('/admin', (req, res, next) => {
   res.sendFile(path.join(dirName, 'views', 'admin.html'));
});

module.exports = route;