/**
 ** Advertising schema
 * @author Najam Ul Saqib
 */
const mongoose = require("mongoose");

//* Schema
const advertisingSchema = new mongoose.Schema(
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
module.exports = mongoose.model("advertising", advertisingSchema);
