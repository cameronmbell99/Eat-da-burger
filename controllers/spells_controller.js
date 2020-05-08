var express = require("express");

var router = express.Router();


var spell = require("../models/spell.js");

router.get("/", function(req,res){
    spell.all(function(data){
        var hbsObject = {
            spell: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/spells", function(req, res){
    spell.create([])
})