/**
 ** AppRoute Controller
 * @author Umar Bin Ayaz
 */
 const AppRoute = require("../models/appRoute");

 /**
  ** Get AppRoute page data
  * @param {object} req
  * @param {object} res
  */
 exports.getAll = async (req, res) => {
   try {
     //? Find Data
     const data = await AppRoute.find();
     res.json({ success: true, data });
   } catch (err) {
     //? Error handling
     console.log("Error ----> ", err);
     res.status(500).json({ success: false, message: "Internal server error" });
   }
 };
 
 /**
  ** Get AppRoute page data
  * @param {object} req
  * @param {object} res
  */
  exports.getById = async (req, res) => {
   try {
     //? Find Data
     const appRouteId = req.params.id; //Getting appRouteId from Params
     const data = await AppRoute.findById(appRouteId);
     if(data){
       res.json({ success: true, data });
     } else {
       res.status(200).json({ success: true, message: "Invalid ID" });
     }
   } catch (err) {
     //? Error handling
     console.log("Error ----> ", err);
     res.status(500).json({ success: false, message: "Internal server error" });
   }
 };
 
 /**
  ** Create
  * @param {object} req
  * @param {object} res
  */
  exports.create = async (req, res) => {
   try {
     await AppRoute.create(req.body).then(() => {
       return res.json({
         success: true,
         message: "App Route Data Uploaded Sucessfully",
       });
     });
   } catch (err) {
     //? Error handling
     console.log("Error ----> ", err);
     res.status(500).json({ success: false, message: "Internal server error" });
   }
 };
 
 /**
  ** Update AppRoute page data
  * @param {object} req
  * @param {object} res
  */
 exports.update = async (req, res) => {
   try {
     const appRouteId = req.params.id; //Getting appRouteId from Params
     const data = await AppRoute.findByIdAndUpdate(appRouteId, req.body);
     if(data){
       return res.json({
         success: true,
         message: "App Route Data Updated Sucessfully",
       });
     } else {
       res.status(200).json({ success: true, message: "Invalid ID" });
     }
   } catch (err) {
     //? Error handling
     console.log("Error ----> ", err);
     res.status(500).json({ success: false, message: "Internal server error" });
   }
 };
 
 /**
  ** Delete
  * @param {object} req
  * @param {object} res
  */
 exports.delete = async (req, res) => {
   try {
     const appRouteId = req.params.id; //Getting appRouteId from Params
     const data = await AppRoute.findByIdAndDelete(appRouteId);
     if(data){
       return res.json({
         success: true,
         message: "App Route Data Deleted Sucessfully",
       });
     } else {
       res.status(200).json({ success: true, message: "Invalid ID" });
     }
   } catch (err) {
     //? Error handling
     console.log("Error ----> ", err);
     res.status(500).json({ success: false, message: "Internal server error" });
   }
 };
 
 
 