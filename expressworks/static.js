/*
Apply static middleware to serve index.html file without any routes.

Your solution must listen on the port number supplied by process.argv[2].
*/

var express = require('express')
var app = express()

app.use(express.static(process.argv[3]||path.join(_dirname, 'public')))

app.listen(process.argv[2])