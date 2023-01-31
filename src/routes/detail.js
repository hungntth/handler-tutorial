const express = require("express");
const router = express.Router();
const { getDetail } = require("../controller/detailController");

router.get("/:name", (req, res) => {
  return getDetail(req, res);
});

module.exports = router;
