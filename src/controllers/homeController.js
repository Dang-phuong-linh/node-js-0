const connection = require("../config/database.js");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getHoiDanIt = (req, res) => {
  // res.send("<h1>hoi dan it voi dang phuong linh</h1>");
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log("req.body: ", req.body);
  res.send("create a new user");
};
module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
};
