var express = require("express");
var router = express.Router();
const UrlHandler = require("../services/url");
const title = "Url Shortener";

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("pages/index", { title });
});

router.post("/shortUrl", async function(req, res, next) {
  try {
    if (!req.body.longUrl) {
      throw new Error("There is nothing to shorten!");
    }
    const url = await UrlHandler.save(req.body.longUrl);
    res.render("pages/saved", { url, title, hostname: req.headers.origin });
  } catch (e) {
    res.render("pages/saveError", { title, message: e.message });
  }
});

router.get("/:shortUrl/stats", async function(req, res, next) {
  const shortUrl = req.params.shortUrl;

  try {
    url = await UrlHandler.find(shortUrl);

    if (!url) {
      throw new Error(`Sorry, this url does not exist`);
    }

    res.render("pages/stats", { title, url });
  } catch (e) {
    res.render("pages/saveError", { title, message: e.message });
  }
});

router.get("/:shortUrl", async function(req, res, next) {
  const shortUrl = req.params.shortUrl;

  try {
    url = await UrlHandler.find(shortUrl);

    if (!url) {
      throw new Error(`Sorry, this url does not exist`);
    }

    UrlHandler.clicked(url);

    res.redirect(url.uri);
  } catch (e) {
    res.render("pages/saveError", { title, message: e.message });
  }
});

module.exports = router;
