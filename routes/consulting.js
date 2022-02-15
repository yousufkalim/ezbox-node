/**
 ** Consulting routes
 * @author Najam Ul Saqib
 */
const router = require("express").Router();
const consulting = require("../controllers/consulting");
const { checkAuth } = require("../middleware/checkAuth");
const {
  isValidated,
  consultingValidate,
} = require("../middleware/validators");
const { upload } = require("../middleware/multer");

/**
 ** Routes
 * @method get get Consulting data
 * @method post create or update Consulting data
 * @method delete Delete Consulting data
 *
 */

//* Read
router.get("/", consulting.getData); //? Get Consulting data
router.post(
  "/",
  checkAuth,
  upload.single("image"),
  consultingValidate,
  isValidated,
  consulting.createUpdate
); //? Create / Update Consulting.
   router.delete("/", checkAuth, consulting.delete); //? delete Consulting data

//* Export
module.exports = router;
