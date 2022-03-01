/**
 ** Layout2 routes
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
 const router = require("express").Router();
 const layout2 = require("../controllers/layout2");
 const { checkAuth } = require("../middleware/checkAuth");
 const {
   isValidated,
   layout2Validate,
 } = require("../middleware/validators");
 const { upload } = require("../middleware/multer");
 
 /**
  ** Routes
  * @method get get Layout2 data
  * @method post create Layout2 data
  * @method put update Layout2 data
  * @method delete Delete Layout2 data
  *
  */
 
 //* Read
 router.get("/", layout2.getAll); //? Get All Layout2 data
 router.get("/:id", layout2.getById); //? Get Single Layout2 data
 
 router.post(
   "/",
   checkAuth,
   layout2Validate,
   isValidated,
   layout2.create
 ); //? Create Layout2.
 router.put(
   "/:id",
   checkAuth,
   layout2Validate,
   isValidated,
   layout2.update
 ); //? Update Layout2.
 router.delete("/:id", checkAuth, layout2.delete); //? delete Layout2 data
 
 //* Export
 module.exports = router;
 
