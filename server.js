var express = require("express");
var handle = require("express-handlebars");
var body = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(body.urlencoded({ extended: true}));
app.use(body.json());
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

app.engine("handlebars", handle({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var route = require("./controllers/spells_controller.js");

app.use(route);
app.listen(PORT, function(){
    console.log("App now listening at localhost: " + PORT);
})