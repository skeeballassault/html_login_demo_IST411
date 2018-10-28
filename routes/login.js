var express = require('express');
var path = require('path');
var router = express.Router();
var MOCK_DATA = require('../MOCK_DATA.json');

router.use('/', express.static(path.join(__dirname, 'public')))

router.post('/', function(req, res){
    var match = false;
    MOCK_DATA.forEach((user)=>{
        if(req.body.email === user.email ){
            match = true
        }

    })
    console.log(req.body.email + " " + MOCK_DATA[0].email)
    console.log(match);
    res.sendFile(path.resolve(__dirname + '/../views/index.html'));
}
);
module.exports = router;
