/**
 ** Navigation routes
 * @author Najam Ul Saqib
 */
const router = require("express").Router();
const navigation = require("../controllers/navigation");
const { checkAuth } = require("../middleware/checkAuth");
const { isValidated, navigationValidate } = require("../middleware/validators");
const { upload } = require("../middleware/multer");

/**
 ** Routes
 * @method get get navigation data
 * @method post create or update nav bar data
 * @method delete Delete navbar data
 *
 */

//* Read
router.get("/", navigation.getNav); //? Get data
router.post("/", checkAuth, navigation.createUpdate); //? Create / Update Navigation.
router.delete("/", checkAuth, navigation.delete); //? delete navigation data

//* Export
module.exports = router;
