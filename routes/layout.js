/**
 ** Layout routes
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
const router = require("express").Router();
const layout = require("../controllers/layout");

/**
 ** Routes
 * @method get get Layout data
 *
 */

//* Read
router.get("/:id", layout.getById); //? Get Single Layout data

//* Export
module.exports = router;
