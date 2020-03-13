const shortId = require("shortid");
const URL = require("../models/uris.model");
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
}

const urlHandler = new UrlHandler();

module.exports = urlHandler;
