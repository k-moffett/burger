const fs =require('fs');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = require('./controllers/burger_controllers.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

router(app, fs)

app.listen(process.env.PORT || 8080);