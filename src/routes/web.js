const express = require("express");
const {
  getHomePage,
  getABC,
  getHoiDanIt,
  postCreateUser,
} = require("../controllers/homeController.js");
const router = express.Router();

//khai bao route
router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/hoidanit", getHoiDanIt);

router.post("/create-user", postCreateUser);
module.exports = router;
