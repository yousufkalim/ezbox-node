/**
 ** Product Development schema
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const mongoose = require("mongoose");

//* Schema
const layout2Schema = new mongoose.Schema(
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
module.exports = mongoose.model("layouts2", layout2Schema);
