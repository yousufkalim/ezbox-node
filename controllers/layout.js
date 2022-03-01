/**
 ** Layout Controller
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const Layout = require("../models/Layout");

/**
 ** Get Layout page data
 * @param {object} req
 * @param {object} res
 */
 exports.getById = async (req, res) => {
  try {
    //? Find Data
    const layoutId = req.params.id; //Getting layoutId from Params
    const data = await Layout.findById(layoutId);
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


