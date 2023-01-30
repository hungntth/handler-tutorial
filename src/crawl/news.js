const axios = require("axios");
const cheerio = require("cheerio");
const getNews = async () => {
  try {
    const siteUrl = "https://lienminh.vnggames.com/vi-vn/latest-news/";
    const { data } = await axios({
      method: "GET",
      url: siteUrl,
    });
    const itemArr = [];
    const test = cheerio.load(data);
    const elementSelector = `#blt0dc6123acc9a8152-section_1 > div > div > div.style__Wrapper-sc-106zuld-0.style__ResponsiveWrapper-sc-106zuld-4.dRXdjM.kXYoSI.style__List-sc-1ynvx8h-3.cwQJeW > div > ol > li`;
    test(elementSelector).each((parentIdx, parentElm) => {
      const id = parentIdx + 1;
      let link = test(parentElm).find("a");
      link = link[0].attribs;
      if (link["href"].search("https://www") === -1) {
        link = "https://lienminh.vnggames.com" + link["href"];
      } else {
        link = link["href"];
      }
      const title = test(parentElm)
        .find("a > article > div.style__Info-sc-1h41bzo-6.evyNIL > div > h2")
        .text();
      const type = test(parentElm).find("a > article > div.style__Info-sc-1h41bzo-6.evyNIL > div > div.style__Category-d3b0qh-0.gUa-DcG").text();
      let author = test(parentElm).find("a > article > div.style__Info-sc-1h41bzo-6.evyNIL > div > div.style__Meta-sc-1h41bzo-10.kxUA-ds").text();
      if(!author){
        author = 'Riot game'
      }
      let image = test(parentElm).find(
        "a > article > div.style__Image-sc-1h41bzo-2.cbzxFR > div > div > img"
      );
      image = image[0].attribs["src"];
      itemArr.push({ id, title, link, image, type, author });
    });
    return itemArr;
  } catch (error) {
    console.log(error);
  }
};

getNews();

module.exports = getNews;
