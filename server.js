var express = require("express");
var handle = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", handle({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var route = require("./controllers/spells_controller.js");

app.use(route);

app.listen(PORT, function(){
    console.log("App now listening at localhost: " + PORT);
})