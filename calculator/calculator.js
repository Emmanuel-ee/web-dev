const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let num1 = Number(req.body.n1);
  let num2 = Number(req.body.n2);
  let result = num1 + num2;
  res.send(`The Result of the calculation is ${result}`);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / Math.pow(height, 2);
  res.send(`Your bmi is ${bmi}`);
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
