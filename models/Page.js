/**
 ** Consulting schema
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
 const mongoose = require("mongoose");

 //* Schema
 const pageSchema = new mongoose.Schema(
   {
     path: {
       type: String,
       required: true,
     },
     name: {
       type: String,
       required: true,
     },
     layout_type: {
      type: String,
      enum: ["type1", "type2", "type3"],
      required: true,
    },
     layout: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "layouts",
       required: true,
     }
   },
   {
     timestamps: true,
   }
 );
 
 //* Model
 module.exports = mongoose.model("pages", pageSchema);
 