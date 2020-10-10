const express = require("express");


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

app.listen("5000", () => {
  console.log("Listening on port 5000");
});