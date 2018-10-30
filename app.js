var express = require('express')
var bodyParser = require('body-parser');
var app = express()
var port = process.env.PORT || 3000
var path = require('path')
var favicon = require('serve-favicon');

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname,'public','images','scroll.ico')));
app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

app.use('/', indexRouter)
app.use('/login', loginRouter)


app.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
});