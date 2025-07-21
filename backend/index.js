const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/connection");
// const authentication = require('./authentication')(db);
const routes = require("./routes")(express, db);
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes);

//Global 500 - Error Handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

//Global 404 - Error Handler
app.use("*", function (req, res, next) {
  res.status(404).send("NOT FOUND");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`This app is listening on port ${port}`));
