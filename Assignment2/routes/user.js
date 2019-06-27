const express = require('express');

const router = express.Router();

router.use((res, req, next) => {
   console.log('asdsad');
});

module.exports = router;