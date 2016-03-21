/*
Style your HTML from previous example with some Stylus middleware.

Your solution must listen on the port number supplied by process.argv[2].

The path containing the HTML and Stylus files is provided in process.argv[3]
(they are in the same directory). You can create your own folder and use these:
*/

var express = require('express')
var app = express()
var stylus = require('stylus')

app.use(require('stylus').middleware(process.argv[3]))

app.use(express.static(process.argv[3]))

app.listen(process.argv[2])

// process.argv[3] // stylus and html files