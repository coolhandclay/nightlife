'use strict';

var Items = require('../models/schema.js');

function ClickHandler () {
    
    this.getItem = function(req, res) {
        var id = req.params.id;
        Items
            .findOne({ '_id' : id })
            .exec(function(err, result) {
                if(err) throw err;
                res.json(result);
            });
    };

}

module.exports = ClickHandler;