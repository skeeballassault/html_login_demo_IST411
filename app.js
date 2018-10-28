const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

app.use('/', indexRouter)
app.use('/login', loginRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))