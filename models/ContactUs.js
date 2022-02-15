/**
 ** Contact Us schema
 * @author Najam Ul Saqib
 */
const mongoose = require("mongoose");

//* Schema
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    number: {
      type: String,
      require: true,
    },
    email: {
      type: String,
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
module.exports = mongoose.model("contact", contactSchema);
