var express = require('express');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/pub/queue/history', express.static(path.join(__dirname, 'public')));
app.use('/templates/queue/history', require('./routes/templateRoutes.js'));

module.exports = app;
