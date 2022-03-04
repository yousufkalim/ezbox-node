/**
 ** Consulting schema
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
 const mongoose = require("mongoose");

 //* Schema
 const pageSchema = new mongoose.Schema(
   {
     is_active: {
       type: Boolean,
       default: true,
     },
     path: {
       type: String,
       required: false,
     },
     name: {
       type: String,
       required: true,
     },
     rel: {
      type: String,
      enum: ["internal", "external"],
      required: true, // For static pages
      default: "internal"
     },
     layout_type: {
      type: String,
      enum: ["type1", "type2", "type3"], // For static pages
     },
     layout: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "layouts", // For static pages
     }
   },
   {
     timestamps: true,
   }
 );
 
 //* Model
 module.exports = mongoose.model("pages", pageSchema);
 