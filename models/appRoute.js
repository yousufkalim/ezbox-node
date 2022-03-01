/**
 ** Consulting schema
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
 const mongoose = require("mongoose");

 //* Schema
 const appRouteSchema = new mongoose.Schema(
   {
     path: {
       type: String,
       require: true,
     },
     name: {
       type: String,
       require: true,
     },
     lo_type: {
      type: String,
      enum: ["type1", "type2", "type3"],
      require: true,
    },
     lo_id: {
       type: mongoose.Types.ObjectId,
       require: true,
     }
   },
   {
     timestamps: true,
   }
 );
 
 //* Model
 module.exports = mongoose.model("app_routes", appRouteSchema);
 