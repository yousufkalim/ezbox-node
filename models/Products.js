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
    description: {
      type: String,
      require: true,
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
