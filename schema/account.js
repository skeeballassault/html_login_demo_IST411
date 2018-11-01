var mongoose = require('mongoose');

var schema = mongoose.Schema({
    email: String,
    password: String
});

var Account = mongoose.model('Account', schema);

module.exports = {
    schema : schema,
    collection : Account
}
