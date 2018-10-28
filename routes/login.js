var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/', express.static(path.join(__dirname, 'public')))

router.get('/', ()=>console.log("HELLO"))

module.exports = router;