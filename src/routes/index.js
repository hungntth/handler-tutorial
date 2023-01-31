const express = require("express");
const router = express.Router();
const championRouter = require("./champion");
const newsRouter = require("./news");
const detailRouter = require("./detail");

router.use("/", championRouter);
router.use("/getChamp", detailRouter);
router.use("/news", newsRouter);

module.exports = router;
