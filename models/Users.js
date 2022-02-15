/**
 ** Reviews schema
 * @author Najam Ul Saqib
 */
 const mongoose = require("mongoose");

 //* Schema
 const userSchema = new mongoose.Schema(
   {
     name: {
       type: String,
       require: true,
     },
     email: {
       type: String,
       require: true,
     },
     password: {
       type: String,
       require: true,
     },
   },
   {
     timestamps: true,
   }
 );
 
 //* Model
 module.exports = mongoose.model("users", userSchema);
 