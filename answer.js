const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.post("/", (req, res) => {
  if (req.body.name && req.body.email) {
    res.sendFile("./public/success.html", { root: __dirname });
  } else {
    res.sendFile("./public/failure.html", { root: __dirname });
  }
});

mongoose.connect('mongodb://localhost:27017/m123', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("Database Connected"));



app.listen("5000", () => {
  console.log("Listening on port 5000");
});