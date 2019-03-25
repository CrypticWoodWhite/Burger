const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

const app = express();
let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
