var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');
var acScheme = require('../schema/account');
var Account = mongoose.model('Account', acScheme.schema);

router.use('/', express.static(path.join(__dirname, 'public')));

router.post('/', function (req, res) {

    Account.findOne({email: req.body.email}, function (err, account) {
        if (account)
            res.render(path.resolve(__dirname + '/../views/cover.html'), {user: account.email});
        else
            res.render(path.resolve(__dirname + '/../views/index.html'), {danger: 'Login Unsuccessful'});
    });
}
);
module.exports = router;
