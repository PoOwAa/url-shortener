const mongoose = require("../services/db");

const schema = mongoose.Schema(
  {
    uri: {
      required: true,
      type: String
    },
    shortUrl: {
      required: true,
      type: String
    },
    clicks: {
      required: true,
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

module.exports = mongoose.model("UrlSchema", schema, "UrlSchema");
