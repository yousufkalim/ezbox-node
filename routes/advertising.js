/**
 ** Advertising routes
 * @author Najam Ul Saqib
 */
const router = require("express").Router();
const advertising = require("../controllers/advertising");
const { checkAuth } = require("../middleware/checkAuth");
const { isValidated, advertisingValidate } = require("../middleware/validators");
const { upload } = require("../middleware/multer");

/**
 ** Routes
 * @method get get Advertising data
 * @method post create or update Advertising data
 * @method delete Delete Advertising data
 *
 */

//* Read
router.get("/", advertising.getData); //? Get Advertising data
 router.post(
   "/",
   checkAuth,
   upload.array('image'),
   advertisingValidate,
   isValidated,
   advertising.createUpdate
 ); //? Create / Update Advertising.
  router.delete("/", checkAuth, advertising.delete); //? delete Advertising data

//* Export
module.exports = router;
