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
    text: {
      type: String,
      require: true,
    },
    image: [
      {
        type: String,
      },
    ],
    textbottom: {
      type: String,
      require: true,
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
