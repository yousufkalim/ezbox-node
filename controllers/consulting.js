/**
 ** COnsulting Controller
 * @author Najam Ul Saqib
 */
const Consulting = require("../models/Consulting");

/**
 ** Get Consulting page data
 * @param {object} req
 * @param {object} res
 */
exports.getData = async (req, res) => {
  try {
    //? Find Data
    let consult = await Consulting.findOne();
    res.json({ success: true, consult: consult || {} });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Create or Update Consulting page data
 * @param {object} req
 * @param {object} res
 */
exports.createUpdate = async (req, res) => {
  try {
    let consulting = await Consulting.findOne(); //? get first document in db.
    if (req.file) {
      //? if request have file
      req.body.image = req.file.path; //? assign image path to body.image
    }
    if (consulting) {
      //? if consulting already have data.
      await Consulting.findOneAndUpdate(req.body).then(() => {
        //? update data
        return res.json({
          success: true,
          message: "Consulting Data Updated Sucessfully",
        });
      });
    } else {
      //? if consulting donot have data
      await Consulting.create(req.body).then(() => {
        //? create it
        return res.json({
          success: true,
          message: "Consulting Data Uploaded Sucessfully",
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
 ** Delete consulting page data
 * @param {object} req
 * @param {object} res
 */
exports.delete = async (req, res) => {
  try {
    await Consulting.findOneAndDelete().then(() => {
      //? find first document and delete it.
      return res.json({
        success: true,
        message: "Consulting Data Deleted Sucessfully",
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
