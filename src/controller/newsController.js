const crawNews = require("../crawl/news");

class NewsController {
    constructor(){}

    getNews = async (req, res) => {
        let news = await crawNews();
        return res.render("news", { news });
      };
}

module.exports = new NewsController