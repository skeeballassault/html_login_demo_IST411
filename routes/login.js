var express = require('express');
var path = require('path');
var router = express.Router();
var MOCK_DATA = require('../MOCK_DATA.json');
var config = require('../config')
var jwt = require('jsonwebtoken');

router.use('/', express.static(path.join(__dirname, 'public')))

router.post('/', function(req, res){
    var foundUser;
    MOCK_DATA.forEach((user)=>{
        if(req.body.email === user.email ){
            foundUser = user;
        }
    })

    if(foundUser){
        var token = jwt.sign({email: foundUser.email}, config.secret);
        res.cookie('auth',token);
        res.render(path.resolve(__dirname + '/../views/cover.html'),{user:foundUser.email});
    } else {
        res.render(path.resolve(__dirname + '/../views/index.html'),{danger:"Login Unsuccessful"});
    }
    
}
);
module.exports = router;
