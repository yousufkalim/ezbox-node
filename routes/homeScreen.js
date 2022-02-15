/**
 ** Home Screen routes
 * @author Najam Ul Saqib
 */
const router = require("express").Router();
const homeScreen = require("../controllers/homeScreen");
const { checkAuth } = require("../middleware/checkAuth");
const { isValidated, homeScreenValidate } = require("../middleware/validators");
const { upload } = require("../middleware/multer");

/**
 ** Routes
 * @method get get home Screen data
 * @method post create or update home Screen data
 * @method delete Delete home Screen data
 *
 */

//* Read
router.get("/", homeScreen.getData); //? Get homeScreen data
router.post(
  "/",
  checkAuth,
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "logo",
      maxCount: 1,
    },
  ]),
  homeScreenValidate,
  isValidated,
  homeScreen.createUpdate
); //? Create / Update homeScreen.
 router.delete("/", checkAuth, homeScreen.delete); //? delete homeScreen data

//* Export
module.exports = router;
