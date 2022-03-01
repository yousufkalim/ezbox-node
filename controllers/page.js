/**
 ** Page Controller
 * @author Umar Bin Ayaz
 */
 const Page = require("../models/Page");
 const Layout = require("../models/Layout");

 /**
  ** Get Page page data
  * @param {object} req
  * @param {object} res
  */
 exports.getAll = async (req, res) => {
   try {
     //? Find Data
     const data = await Page.find().populate("layout");
     res.json({ success: true, data });
   } catch (err) {
     //? Error handling
     console.log("Error ----> ", err);
     res.status(500).json({ success: false, message: "Internal server error" });
   }
 };
 
 /**
  ** Get Page page data
  * @param {object} req
  * @param {object} res
  */
  exports.getById = async (req, res) => {
   try {
     //? Find Data
     const pageId = req.params.id; //Getting PageId from Params
     const data = await Page.findById(pageId).populate("layout");
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
     const layoutId = req.body.layout;

     const layout = await Layout.findById(
      layoutId
     );

     if(!layout){
      return res.json({
        success: false,
        message: "Invalid Layout.",
      });
     }

     await Page.create(req.body).then(() => {
       return res.json({
         success: true,
         message: "Page Data Uploaded Sucessfully",
       });
     });
   } catch (err) {
     //? Error handling
     console.log("Error ----> ", err);
     res.status(500).json({ success: false, message: "Internal server error" });
   }
 };
 
 /**
  ** Update Page page data
  * @param {object} req
  * @param {object} res
  */
 exports.update = async (req, res) => {
   try {

     const layoutId = req.body.layout;

     if(layoutId){
      const layout = await Layout.findById(
        layoutId
       );
  
       if(!layout){
        return res.json({
          success: false,
          message: "Invalid Layout.",
        });
       }
     }

     const pageId = req.params.id; //Getting PageId from Params
     const data = await Page.findByIdAndUpdate(pageId, req.body);
     if(data){
       return res.json({
         success: true,
         message: "Page Data Updated Sucessfully",
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
     const pageId = req.params.id; //Getting PageId from Params
     const data = await Page.findByIdAndDelete(pageId);
     if(data){
       return res.json({
         success: true,
         message: "Page Data Deleted Sucessfully",
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
 
 
 