var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/', express.static(path.join(__dirname, 'public')))

router.get('/', function(){
    console.log('LOGIN HIT');
}
);
module.exports = router;