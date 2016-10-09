'use strict';

var Items = require('../models/schema.js');

function EventHandler () {
    
    this.show = function(req, res) {
        Items
            .find({})
            .exec(function(err, items) {
                if(err) console.error(err);
                res.render('index', items);
            });
    };

}

module.exports = EventHandler;