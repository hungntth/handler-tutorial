const express = require("express");
const router = express.Router();
const { getNews } = require("../controller/newsController");

router.get("/", (req, res) => {
  return getNews(req, res);
});

router.get("/getChamp/:id", (req, res) => {
  res.render("detail");
});

module.exports = router;
