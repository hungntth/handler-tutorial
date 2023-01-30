const express = require("express");
const router = express.Router();
const { getAllChamp } = require("../controller/championController");

router.get("/", (req, res) => {
  return getAllChamp(req, res);
});

router.get("/getChamp/:id", (req, res) => {
  res.render("detail");
});

module.exports = router;
