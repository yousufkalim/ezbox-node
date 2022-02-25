/**
 ** Nav Bar Controller
 * @author Najam Ul Saqib
 */
const Navigation = require("../models/Navigation");

/**
 ** Get Nav bar data
 * @param {object} req
 * @param {object} res
 */
exports.getNav = async (req, res) => {
  try {
    //? Find navigation
    let navigation = await Navigation.findOne();
    res.json({ success: true, navigation: navigation || {} });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Create / updaet navbar data
 * @param {object} req
 * @param {object} res
 */
exports.createUpdate = async (req, res) => {
  try {
    let nav = await Navigation.findOne(); //? find first document
    if (req.file) {
      //? check if request have file
      req.body.logo = req.file.path; //? assign to body
    }
    if (req.body.whatsapp) {
      //? if request have whatsapp number convert it into url.
      req.body.whatsapp = `https://wa.me/${req.body.whatsapp}`;
    }
    if (nav) {
      //? if nav bar already have data update it
      await Navigation.findOneAndUpdate(req.body).then(() => {
        //? find first document and update it
        return res.json({
          success: true,
          message: "Navigation Bar Data Updated Sucessfully",
        });
      });
    } else {
      //? if navbar donot have data create it.
      await Navigation.create(req.body).then(() => {
        return res.json({
          success: true,
          message: "Navigation Bar Data Uploaded Sucessfully",
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
 ** Delete navbar data
 * @param {object} req
 * @param {object} res
 */
exports.delete = async (req, res) => {
  try {
    await Navigation.findOneAndDelete().then(() => {
      //? find first document in navbar and delete it.
      return res.json({
        success: true,
        message: "Navigation Bar Data Deleted Sucessfully",
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
