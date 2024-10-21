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
  // console.log("req.body: ", req.body);
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  //
  connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.send("create user success");
    }
  );
};
module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
};
