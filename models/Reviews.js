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
    rating: {
      type: Number,
      require: true,
    },
    message: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

//* Model
module.exports = mongoose.model("review", reviewSchema);
