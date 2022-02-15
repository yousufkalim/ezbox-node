/**
 ** Advertising Controller
 * @author Najam Ul Saqib
 */
const Advertising = require("../models/Advertising");

/**
 ** Get Advertising page data
 * @param {object} req 
 * @param {object} res 
 */
exports.getData = async (req, res) => {
  try {
    //? Find Data
    let data = await Advertising.findOne();
    res.json({ success: true, data });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Create or Update Advertising page data
 * @param {object} req 
 * @param {object} res 
 */
exports.createUpdate = async (req, res) => {
  try {
    let advertising = await Advertising.findOne(); //? get first document
    if (req.files) {  //? if request have files.
      let images = req.files;
      let filePaths = []; //? empty array for file paths
      images.forEach((image) => {
        if(image.fieldname === "image"){
          filePaths.push(image.path); //? pushing paths in array
        }
      });
      req.body.image = filePaths; //? assign paths to body.image
    }
    if (advertising) { //? if advertising page already have data
      await Advertising.findOneAndUpdate(req.body).then(() => { //? update data
        return res.json({
          success: true,
          message: "Advertising Data Updated Sucessfully",
        });
      });
    } else { //? if advertising page donot have data.
      await Advertising.create(req.body).then(() => {
        return res.json({
          success: true,
          message: "Advertising Data Uploaded Sucessfully",
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
 ** Delete Advertising page data
 * @param {object} req 
 * @param {object} res 
 */
exports.delete = async (req, res) => {
  try {
    await Advertising.findOneAndDelete().then(() => { //? find first document and delete it.
      return res.json({
        success: true,
        message: "Advertising Data Deleted Sucessfully",
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
