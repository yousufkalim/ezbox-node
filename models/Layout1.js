/**
 ** Advertising schema
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const mongoose = require("mongoose");

//* Schema
const layout1Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    title_font: {
      type: String,
      default: "Urbanist",
    },
    text: {
      type: String,
      require: true,
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
      require: true,
    },
    textbottom_font: {
      type: String,
      default: "Urbanist",
    },
    contactbutton: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

//* Model
module.exports = mongoose.model("layouts1", layout1Schema);
