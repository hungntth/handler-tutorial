const axios = require("axios");
const cheerio = require("cheerio");
const getChamp = async (champName) => {
  try {
    const siteUrl =
      "https://lienminh.vnggames.com/vi-vn/champions/" + champName;
    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });
    const skillImage = [];
    const skillContext = [];
    const skins = [];
    const test = cheerio.load(data);
    const elementSelector = `#gatsby-focus-wrapper > div > section.style__Wrapper-sc-1bu2ash-0.bKlaSK > div.style__Wrapper-dramnq-5.style__ResponsiveWrapper-dramnq-6.jTRJgF.dZFicW > div.style__Content-dramnq-3.bOGPtV > div > div.style__SelectorWrapper-sc-1bu2ash-4.drqAuv > div > div > div:nth-child(2) > button`;
    test(elementSelector).each((parentIdx, parentElm) => {
      const id = parentIdx + 1;
      test(parentElm).find("span.style__Name-n3ovyt-2.cMGedC > span").text();
      let image = test(parentElm).find(
        "span.style__OptionIcon-sc-1ac4kmt-5.jEzqH > span.style__OptionIconContent-sc-1ac4kmt-6.gJApxa > img"
      );
      image = image[0].attribs["src"];
      skillImage.push({ id, image });
    });
    const elementSelectorContext = `#gatsby-focus-wrapper > div > section.style__Wrapper-sc-1bu2ash-0.bKlaSK > div.style__Wrapper-dramnq-5.style__ResponsiveWrapper-dramnq-6.jTRJgF.dZFicW > div.style__Content-dramnq-3.bOGPtV > div > div.style__SelectorWrapper-sc-1bu2ash-4.drqAuv > div > div > div:nth-child(2) > div.style__AbilityInfo-sc-1bu2ash-6.IhSOT > ol > li`;
    test(elementSelectorContext).each((parentIdx, parentElm) => {
      const id = parentIdx + 1;
      const category = test(parentElm).find("h6").text();
      const skill_name = test(parentElm).find("h5").text();
      const skill_description = test(parentElm).find("p").text();
      skillContext.push({ id, category, skill_name, skill_description });
    });

    const skillList = `#gatsby-focus-wrapper > div > section.style__Wrapper-gky2mu-0.style__ResponsiveWrapper-gky2mu-17.ljGjAa.jTwIIQ > div > div.style__Content-dramnq-3.bOGPtV > div > div.style__Side-gky2mu-6.ksgwkU > div > ul > div > div > li`;
    test(skillList).each((index, item) => {
      const skin_id = index + 1;
      const skin_name = test(item).find("label").text();
      let skin_image = test(item).find("img");
      skin_image = skin_image[0].attribs["src"];
      skins.push({ skin_id, skin_name, skin_image });
    });
    const detail = skillContext.map((item, index) => ({
      ...item,
      image: skillImage[index].image,
    }));
    const result = {
      skills: detail,
      skins: skins,
    };
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getChamp;
