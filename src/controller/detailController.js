const crawDetailChamp = require("../crawl/detailChamp");

const getDetail = async (req, res) => {
  const champName = req.params.name;
  let champ = await crawDetailChamp(champName.toLowerCase());
  if(champ?.skills?.length || champ?.skins?.length){
    const name = champ.skins[0].skin_name;
    const coverImage = champ.skins[0].skin_image;
    for(let skill of champ.skills){
      skill.skill_element = skill.skill_name.split(" ").join('').toLowerCase();
    }
    let {skills, skins} = champ
    let skin_default
    [skin_default,...skins] =  skins;
    [skin_default,...skins] =  skins;
    console.log(skills)
    return res.render("detail", { name, coverImage, skills, skins, skin_default });
  }
};

module.exports = {
  getDetail,
};
