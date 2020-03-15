const shortId = require("shortid");
const URL = require("../models/uris.model");
const Statistics = require("../models/statistics.model");
const validator = require("validator");

class UrlHandler {
  async find(shortUrl) {
    return await URL.findOne({
      shortUrl
    });
  }

  async save(url) {
    validator.isUrl;

    const shortUrl = shortId.generate();
    const model = new URL({
      uri: url,
      shortUrl
    });
    await model.save();
    return model;
  }

  async clicked(urlModel) {
    urlModel.clicks++;
    urlModel.save();
  }

  async saveStats(shortUrl, userAgent) {
    const stat = new Statistics({
      shortUrl,
      userAgent
    });
    stat.save();
  }

  async getStatistics(shortUrl) {
    return Statistics.find({
      shortUrl
    });
  }
}

const urlHandler = new UrlHandler();

module.exports = urlHandler;
