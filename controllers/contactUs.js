/**
 ** Contact US
 * @author Najam Ul Saqib
 */
const ContactUs = require("../models/ContactUs");

/**
 ** Get All messages
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    let messages = await ContactUs.find(); //? get all messages
    return res
      .status(200)
      .json({ success: true, messages: messages.reverse() });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Create Message
 * @param {object} req
 * @param {object} res
 */
exports.create = async (req, res) => {
  try {
    await ContactUs.create(req.body).then((data, err) => {
      //? create message
      if (err) throw err;
      res.status(200).json({
        success: true,
        message: "Message Sent Sucessfully!",
        data,
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Delete Messages
 * @param {object} req
 * @param {object} res
 */
exports.delete = async (req, res) => {
  try {
    await ContactUs.findByIdAndDelete(req.params.msgId).then(() => {
      //? get message by id and delete
      res.status(200).json({
        success: true,
        message: "Message Deleted Sucessfully!",
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
