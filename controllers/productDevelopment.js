/**
 ** Product Development Controller
 * @author Najam Ul Saqib
 */
const ProductDev = require("../models/ProductDev");

/**
 ** Get Product Development page data
 * @param {object} req
 * @param {object} res
 */
exports.getData = async (req, res) => {
  try {
    //? Find Data
    let productDev = await ProductDev.findOne();
    res.json({ success: true, productDev: productDev || {} });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Craete / Update Product Development page data
 * @param {object} req
 * @param {object} res
 */
exports.createUpdate = async (req, res) => {
  try {
    let productDev = await ProductDev.findOne(); //? find data
    if (req.files) {
      //? if files exist
      let images = req.files;
      let filePaths = []; //? empty array for image paths
      images.forEach((image) => {
        if (image.fieldname === "image") {
          filePaths.push(image.path); //? push paths in array
        }
      });
      req.body.image = filePaths; //? file path array assigned to body.image
    }
    if (productDev) {
      //? if data already exist update it
      await ProductDev.findOneAndUpdate(req.body).then(() => {
        //? find first document and update it.
        return res.json({
          success: true,
          message: "Product Development Data Updated Sucessfully",
        });
      });
    } else {
      //? if data didn't found create data.
      await ProductDev.create(req.body).then(() => {
        return res.json({
          success: true,
          message: "Product Development Data Uploaded Sucessfully",
        });
      });
    }
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Delete Product Development page data
 * @param {object} req
 * @param {object} res
 */
exports.delete = async (req, res) => {
  try {
    await ProductDev.findOneAndDelete().then(() => {
      //? find first document and delete it.
      return res.json({
        success: true,
        message: "Product Development Data Deleted Sucessfully",
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
