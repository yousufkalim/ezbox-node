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
     const data = await Page.find({ is_active: true }).populate("layout");
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
  exports.getOne = async (req, res) => {
   try {
     //? Find Data
     const data = await Page.findOne(req.body)?.populate("layout");
     if(data){
       res.json({ success: true, data });
     } else {
       res.status(200).json({ success: true, message: "Nothing found for this data." });
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

     const path = req.body.path;

     if(path){
      const pathExists = await Page.findOne({
        path: path
      });
 
      if(pathExists){
       return res.status(400).json({
         success: false,
         message: "Page with this path already exists.",
       });
      }
     }

     const layoutBody = req.body.layout;
     let layout;
     if(layoutBody){
      layout = await Layout.create(layoutBody);
     }

     await Page.create({
      ...req.body,
      layout: layout?._id
     }).then(() => {
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

     const path = req.body.path;

     if(path){
      const pathExists = await Page.findOne({
        path: path
      });
 
      if(pathExists){
       return res.json({
         success: false,
         message: "Page with this path already exists.",
       });
      }
     }

     const layoutBody = req.body.layout;

     if(layoutBody){
      const layout = await Layout.findByIdAndUpdate(
        layoutBody._id,
        {
          ...layoutBody,
          _id: undefined
        }
      );
      // findOneAndUpdate was not used consciously because of _id being in the object.
      // As it is not possible to modify _id of objects, it will raise RT exception.

      if(!layout){
        return res.status(400).json({
          success: false,
          message: "Invalid Layout ID.",
        });
      }
      // This is here, but can obviously add check to match unique id of layout to page as well.
      // Best Wishes,
      // Umar.
      // March 01, 2022
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
     const dataPage = await Page.findByIdAndDelete(pageId);
     const datalayout = await Layout.findByIdAndDelete(dataPage.layout);
     if(dataPage && datalayout){
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
 
 
 