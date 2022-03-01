/**
 ** Layout3 routes
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
 const router = require("express").Router();
 const layout3 = require("../controllers/layout3");
 const { checkAuth } = require("../middleware/checkAuth");
 const {
   isValidated,
   layout3Validate,
 } = require("../middleware/validators");
 const { upload } = require("../middleware/multer");
 
 /**
  ** Routes
  * @method get get Layout3 data
  * @method post create Layout3 data
  * @method put update Layout3 data
  * @method delete Delete Layout3 data
  *
  */
 
 //* Read
 router.get("/", layout3.getAll); //? Get All Layout3 data
 router.get("/:id", layout3.getById); //? Get Single Layout3 data
 
 router.post(
   "/",
   checkAuth,
   layout3Validate,
   isValidated,
   layout3.create
 ); //? Create Layout3.
 router.put(
   "/:id",
   checkAuth,
   layout3Validate,
   isValidated,
   layout3.update
 ); //? Update Layout3.
 router.delete("/:id", checkAuth, layout3.delete); //? delete Layout3 data
 
 //* Export
 module.exports = router;
 
