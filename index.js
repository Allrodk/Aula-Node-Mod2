const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello BLuemer");
});

app.get("/teste", function (req, res) {
  res.send("Esse é um teste Blue");
});

app.get("/uau", function (req, res) {
  res.send("Uau, mudei de página");
});

app.listen(3000);
