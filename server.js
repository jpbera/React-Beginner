const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const InitiateMongoServer = require("./app/config/dbconfig.js");

// Initiate Mongo Server
InitiateMongoServer();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to NodeAPI application." });
});
app.listen(process.env.LISTEN_PORT, () => console.log("server is running..." + process.env.LISTEN_PORT));