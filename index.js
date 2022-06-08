const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000
app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
