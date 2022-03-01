/**
 ** Layout1 routes
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const router = require("express").Router();
const layout1 = require("../controllers/layout1");
const { checkAuth } = require("../middleware/checkAuth");
const {
  isValidated,
  layout1Validate,
} = require("../middleware/validators");
const { upload } = require("../middleware/multer");

/**
 ** Routes
 * @method get get Layout1 data
 * @method post create Layout1 data
 * @method put update Layout1 data
 * @method delete Delete Layout1 data
 *
 */

//* Read
router.get("/", layout1.getAll); //? Get All Layout1 data
router.get("/:id", layout1.getById); //? Get Single Layout1 data

router.post(
  "/",
  checkAuth,
  layout1Validate,
  isValidated,
  layout1.create
); //? Create Layout1.
router.put(
  "/:id",
  checkAuth,
  layout1Validate,
  isValidated,
  layout1.update
); //? Update Layout1.
router.delete("/:id", checkAuth, layout1.delete); //? delete Layout1 data

//* Export
module.exports = router;
