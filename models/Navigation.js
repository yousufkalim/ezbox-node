/**
 ** Navigation schema
 * @author Najam Ul Saqib
 */
const mongoose = require("mongoose");

//* Schema
const navigationSchema = new mongoose.Schema(
  {
    blog: {
      type: String,
      require: true,
    },
    forum: {
      type: String,
      require: true,
    },
    logo: {
      type: String,
      require: true,
    },
    facebook: String,
    instagram: String,
    whatsapp: String,
    linkedIn: String,
    twitter: String,
    tiktok: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

//* Model
module.exports = mongoose.model("navigation", navigationSchema);
