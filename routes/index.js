var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/', express.static(path.join(__dirname, 'public')));


router.get('/', function(req, res) {
    res.sendfile(path.resolve(__dirname + '/../views/index.html'));  }
    
);

module.exports = router;