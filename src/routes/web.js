const express = require("express");
const router = express.Router();

//khai bao route
router.get("/", (req, res) => {
  res.send("Hello World! $ nodemon");
});

router.get("/abc", (req, res) => {
  res.send("check ABC");
});

router.get("/hoidanit", (req, res) => {
  // res.send("<h1>hoi dan it voi dang phuong linh</h1>");
  res.render("sample.ejs");
});

module.exports = router