/**
 ** Home Screen Controller
 * @author Najam Ul Saqib
 */
const HomeScreen = require("../models/HomeScreen");

/**
 ** Get Home Screen page data
 * @param {object} req 
 * @param {object} res 
 */
exports.getData = async (req, res) => {
  try {
    //? Find Data
    let data = await HomeScreen.findOne();
    res.json({ success: true, data });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Create / Update Home Screen page data
 * @param {object} req 
 * @param {object} res 
 */
exports.createUpdate = async (req, res) => {
  try {
    let home = await HomeScreen.findOne(); //? get first document in db.
    if (req.files.logo) { //? if request have logo
      req.body.logo = req.files.logo[0].path; 
    }
    if (req.files.image) { //? if request have image
      req.body.image = req.files.image[0].path;
    }
    if (home) { //? if home screen have data update it.
      await HomeScreen.findOneAndUpdate(req.body).then(() => {
        return res.json({
          success: true,
          message: "HomeScreen Data Updated Sucessfully",
        });
      });
    } else { //? if home screen donot have data create it.
      await HomeScreen.create(req.body).then(() => {
        return res.json({
          success: true,
          message: "HomeScreen Data Uploaded Sucessfully",
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
 ** Delete Home Screen page data
 * @param {object} req 
 * @param {object} res 
 */
exports.delete = async (req, res) => {
  try {
    await HomeScreen.findOneAndDelete().then(() => { //? find first document in db and delete it
      return res.json({
        success: true,
        message: "HomeScreen Data Deleted Sucessfully",
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
