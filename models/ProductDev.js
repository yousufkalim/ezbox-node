/**
 ** Product Development schema
 * @author Najam Ul Saqib
 */
const mongoose = require("mongoose");

//* Schema
const productDevSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

//* Model
module.exports = mongoose.model("product_development", productDevSchema);
