const mongoose = require("../services/db");

const schema = mongoose.Schema(
  {
    shortUrl: {
      required: true,
      type: String
    },
    userAgent: {
      isYaBrowser: Boolean,
      isAuthoritative: Boolean,
      isMobile: Boolean,
      isTablet: Boolean,
      isiPad: Boolean,
      isiPod: Boolean,
      isiPhone: Boolean,
      isAndroid: Boolean,
      isBlackberry: Boolean,
      isOpera: Boolean,
      isIE: Boolean,
      isEdge: Boolean,
      isIECompatibilityMode: Boolean,
      isSafari: Boolean,
      isFirefox: Boolean,
      isWebkit: Boolean,
      isChrome: Boolean,
      isKonqueror: Boolean,
      isOmniWeb: Boolean,
      isSeaMonkey: Boolean,
      isFlock: Boolean,
      isAmaya: Boolean,
      isPhantomJS: Boolean,
      isEpiphany: Boolean,
      isDesktop: Boolean,
      isWindows: Boolean,
      isLinux: Boolean,
      isLinux64: Boolean,
      isMac: Boolean,
      isChromeOS: Boolean,
      isBada: Boolean,
      isSamsung: Boolean,
      isRaspberry: Boolean,
      isBot: Boolean,
      isCurl: Boolean,
      isAndroidTablet: Boolean,
      isWinJs: Boolean,
      isKindleFire: Boolean,
      isSilk: Boolean,
      isCaptive: Boolean,
      isSmartTV: Boolean,
      isUC: Boolean,
      isFacebook: Boolean,
      isAlamoFire: Boolean,
      isElectron: Boolean,
      silkAccelerated: Boolean,
      browser: String,
      version: String,
      os: String,
      platform: String,
      geoIp: mongoose.Schema.Types.Mixed,
      source: String
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

module.exports = mongoose.model("statistics", schema, "statistics");
