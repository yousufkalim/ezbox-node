/**
 ** Layout1 Controller
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const Layout1 = require("../models/Layout1");

/**
 ** Get Layout1 page data
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    //? Find Data
    const data = await Layout1.find();
    res.json({ success: true, data });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Get Layout1 page data
 * @param {object} req
 * @param {object} res
 */
 exports.getById = async (req, res) => {
  try {
    //? Find Data
    const layoutId = req.params.id; //Getting layoutId from Params
    const data = await Layout1.findById(layoutId);
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
    if (req.files) {
      //? if request have files.
      let images = req.files;
      let filePaths = []; //? empty array for file paths
      images.forEach((image) => {
        if (image.fieldname === "image") {
          filePaths.push(image.path); //? pushing paths in array
        }
      });
      req.body.image = filePaths; //? assign paths to body.image
    }
    //? if layout1 page donot have data.
    await Layout1.create(req.body).then(() => {
      return res.json({
        success: true,
        message: "Layout1 Data Uploaded Sucessfully",
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Update Layout1 page data
 * @param {object} req
 * @param {object} res
 */
exports.update = async (req, res) => {
  try {
    const layoutId = req.params.id; //Getting layoutId from Params
    if (req.files) {
      //? if request have files.
      let images = req.files;
      let filePaths = []; //? empty array for file paths
      images.forEach((image) => {
        if (image.fieldname === "image") {
          filePaths.push(image.path); //? pushing paths in array
        }
      });
      req.body.image = filePaths; //? assign paths to body.image
    }
    const data = await Layout1.findByIdAndUpdate(layoutId, req.body);
    if(data){
      return res.json({
        success: true,
        message: "Layout1 Data Updated Sucessfully",
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
    const layoutId = req.params.id; //Getting layoutId from Params
    const data = await Layout1.findByIdAndDelete(layoutId);
    if(data){
      return res.json({
        success: true,
        message: "Layout1 Data Deleted Sucessfully",
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











 
