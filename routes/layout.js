/**
 ** Layout routes
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const router = require("express").Router();
const layout = require("../controllers/layout");
const { checkAuth } = require("../middleware/checkAuth");
const {
  isValidated,
  layoutValidate,
} = require("../middleware/validators");
const { upload } = require("../middleware/multer");

/**
 ** Routes
 * @method get get Layout data
 * @method post create Layout data
 * @method put update Layout data
 * @method delete Delete Layout data
 *
 */

//* Read
router.get("/", layout.getAll); //? Get All Layout data
router.get("/:id", layout.getById); //? Get Single Layout data

router.post(
  "/",
  checkAuth,
  layoutValidate,
  isValidated,
  layout.create
); //? Create Layout.
router.put(
  "/:id",
  checkAuth,
  // layoutValidate,
  isValidated,
  layout.update
); //? Update Layout.
router.delete("/:id", checkAuth, layout.delete); //? delete Layout data

//* Export
module.exports = router;
