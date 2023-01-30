const crawChampion = require("../crawl/champions");

const getAllChamp = async (req, res) => {
  let champs = await crawChampion();
  return res.render("home", { champs });
};

module.exports = {
  getAllChamp,
};
