/**
 ** Consulting schema
 * @author Najam Ul Saqib
 */
const mongoose = require("mongoose");

//* Schema
const consultingSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
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
module.exports = mongoose.model("consulting", consultingSchema);
