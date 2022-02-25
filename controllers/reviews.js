/**
 ** Contact US
 * @author Najam Ul Saqib
 */
const Reviews = require("../models/Reviews");

/**
 ** Get All reviews
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    let reviews = await Reviews.find(); //? get all reviews
    return res.status(200).json({ success: true, reviews });
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
    await Reviews.create(req.body).then((data, err) => {
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
 ** Update review
 * @param {object} req
 * @param {object} res
 */
exports.update = async (req, res) => {
  try {
    await Reviews.findByIdAndUpdate(req.params.reviewId, req.body).then(
      //? update Review
      (review, err) => {
        if (err) throw err;
        res.status(200).json({
          success: true,
          message: "Review Updated Sucessfully!",
          review,
        });
      }
    );
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Delete reviews
 * @param {object} req
 * @param {object} res
 */
exports.delete = async (req, res) => {
  try {
    await Reviews.findByIdAndDelete(req.params.msgId).then(() => {
      //? get review by id and delete
      res.status(200).json({
        success: true,
        message: "Review Deleted Sucessfully!",
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
