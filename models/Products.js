/**
 ** Product schema
 * @author Najam Ul Saqib
 */
const mongoose = require("mongoose");

//* Schema
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    title_font: {
      type: String,
      default: "Urbanist",
    },
    description: {
      type: String,
      require: true,
    },
    description_font: {
      type: String,
      default: "Urbanist",
    },
    image: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//* Model
module.exports = mongoose.model("product", productSchema);
