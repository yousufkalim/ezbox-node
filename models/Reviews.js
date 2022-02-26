/**
 ** Reviews schema
 * @author Najam Ul Saqib
 */
const mongoose = require("mongoose");

//* Schema
const reviewSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    name_font: {
      type: String,
      default: "Urbanist",
    },
    rating: {
      type: Number,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
    message_font: {
      type: String,
      default: "Urbanist",
    },
  },
  {
    timestamps: true,
  }
);

//* Model
module.exports = mongoose.model("review", reviewSchema);
