const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const UserController = require("./controller/UserController");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => res.render("index"));
app.post("/login", UserController.login);

app.listen(3000);
