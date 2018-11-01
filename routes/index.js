var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/', express.static(path.join(__dirname, 'public')));


router.get('/', function(req, res) {
    res.render(path.resolve(__dirname + '/../views/index.html'),{danger:null});  }

);

router.get('/cover', function(req, res) {
    res.sendFile(path.resolve(__dirname + '/../views/cover.html'));  }

);

module.exports = router;
