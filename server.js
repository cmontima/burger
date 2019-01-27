require('dotenv').config();


// Bring the express package into this file and put it inside a variable named express.
var express = require("express");

// Bring in the models.
var models = require("./models");

// Create a new express server instance and put it inside a variable named app.
var app = express();

// The port for our express server.
var PORT = 8080;

require('./config/config.js')(app);

models.sequelize.sync().then(function () {
    console.log("\nDatabase ready \n");
});

app.listen(PORT, function () {
    console.log("Server is listening on port", PORT);
});