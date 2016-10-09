'use strict';

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./app/routes/index.js');
var sass = require('node-sass');

var app = express();
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI);

app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'pug');

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/client', express.static(process.cwd() + '/client'));
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});