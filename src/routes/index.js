const express = require("express");
const router = express.Router();
const { getAllChamp } = require("../controller/championController");
const championRouter = require("./champion");

router.use("/", championRouter);

module.exports = router;
