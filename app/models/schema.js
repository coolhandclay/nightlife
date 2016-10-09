'use strict';

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

autoIncrement.initialize(mongoose.connection);

var ListItems = new Schema({
    name: String,
    amount: Number
});

var Test = new Schema({
    name: String,
    list: [ListItems]
});

Test.plugin(autoIncrement.plugin, 'Test');

module.exports = mongoose.model('Test', Test);