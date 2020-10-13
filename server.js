const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);


mongoose
  .connect("mongodb://localhost/P19", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true 
  })
  .then(() => console.log("Database Connected"));

app.listen("5000", () => {
  console.log("Listening on port 5000");
});