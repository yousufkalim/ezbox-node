/**
 ** Consulting schema
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const mongoose = require("mongoose");

//* Schema
const layout3Schema = new mongoose.Schema(
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
module.exports = mongoose.model("layouts3", layout3Schema);
