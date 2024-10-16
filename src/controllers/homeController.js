const getHomePage = (req, res) => {
  //process data
  //call model
  res.send("welcome home");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getHoiDanIt = (req, res) => {
  // res.send("<h1>hoi dan it voi dang phuong linh</h1>");
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getABC,
  getHoiDanIt,
};
