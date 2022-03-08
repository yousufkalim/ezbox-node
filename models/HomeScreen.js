/**
 ** Home Screen schema
 * @author Najam Ul Saqib
 */
const mongoose = require("mongoose");

//* Schema
const homeScreenSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    text_font: {
      type: String,
      default: "Urbanist",
    },
    image: {
      type: String,
      require: true,
    },
    background_image: {
      type: String,
      require: true,
    },
    is_background_image_active: {
      type: Boolean,
      default: true,
    },
    yt_link: {
      type: String,
      require: true,
    },
    logo: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//* Model
module.exports = mongoose.model("home_screen", homeScreenSchema);
