const crawDetailChamp = require("../crawl/detailChamp");

const getDetail = async (req, res) => {
  const champName = req.params.name;
  let champ = await crawDetailChamp(champName.toLowerCase());
  const name = champ.skins[0].skin_name;
  const coverImage = champ.skins[0].skin_image;
  return res.render("detail", { name, coverImage });
};

module.exports = {
  getDetail,
};
