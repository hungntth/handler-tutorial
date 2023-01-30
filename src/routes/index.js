const express = require("express");
const router = express.Router();
const championRouter = require("./champion");
const newsRouter = require("./news");

router.use("/", championRouter);
router.use("/news", newsRouter);

module.exports = router;
