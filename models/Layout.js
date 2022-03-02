/**
 ** Advertising schema
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const mongoose = require("mongoose");

//* Schema
const layouSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    title_font: {
      type: String,
      default: "Urbanist",
    },
    text: {
      type: String,
    },
    text_font: {
      type: String,
      default: "Urbanist",
    },
    leftImg: String,
    centerImg: String,
    rightImg: String,
    textbottom: {
      type: String,
    },
    textbottom_font: {
      type: String,
      default: "Urbanist",
    },
    contactbutton: {
      type: Boolean,
    },
    image: {
      type: String,
    }, // Layout3
  },
  {
    timestamps: true,
  }
);

//* Model
module.exports = mongoose.model("layouts", layouSchema);
