const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.listen("5000", () => {
  console.log("Listening on port 5000");
});