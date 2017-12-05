var express = require('express')
var path = require('path')
var app = express()

const port = 8090

app.use(express.static('./dist'))

app.listen(port)

console.log('server listened at port: ' + port)
