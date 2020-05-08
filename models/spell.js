var orm = require("../config/orm.js");

var spell = {
    all: function(cb){
        orm.selectAll("spells", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.insertOne("spells", cols, vals, function(res){
            cb(res);
        })
    },
    update: function(objVals, condition, cb){
        orm.updateOne("spells", objVals, condition, function(res){
            cb(res);
        })
    }
}

module.exports = spell;