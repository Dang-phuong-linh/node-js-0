const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express(); //app express
const port = process.env.PORT || 8888; //hard code
const hostname = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//config static file
app.use(express.static(path.join(__dirname, "public")));

//khai bao route
app.get("/", (req, res) => {
  res.send("Hello World! $ nodemon");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/hoidanit", (req, res) => {
  // res.send("<h1>hoi dan it voi dang phuong linh</h1>");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
