var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
