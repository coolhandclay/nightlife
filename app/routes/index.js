'use strict';

var path = process.cwd();
var ClickHandler = require(path + '/app/controllers/clickHandler.js');
var EventHandler = require(path + '/app/controllers/eventHandler.js');

module.exports = function (app) {
    
    var clickHandler = new ClickHandler();
    var eventHandler = new EventHandler();
    
    app.route('/')
        .get(eventHandler.show);

};