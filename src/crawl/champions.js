const axios = require("axios");
const cheerio = require("cheerio");
const getAllChamp = async () => {
  try {
    const siteUrl = "https://u.gg/lol/champions";
    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });
    const itemArr = [];
    const test = cheerio.load(data);
    const elementSelector = `#content > div > div > div.champion-home > div.champions-container > a`;
    test(elementSelector).each((parentIdx, parentElm) => {
      const id = parentIdx + 1;
      const name = test(parentElm).find("div.champion-name").text();
      let image = test(parentElm).find("div.image-wrapper > img");
      image = image[0].attribs["src"];
      itemArr.push({ id, name, image });
    });
    return itemArr;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllChamp;
