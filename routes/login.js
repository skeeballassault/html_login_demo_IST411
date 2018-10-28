var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/', express.static(path.join(__dirname, 'public')))

router.post('/', function(req, res){
    console.log(req.body);
    res.sendFile(path.resolve(__dirname + '/../views/index.html'));
}
);
module.exports = router;
