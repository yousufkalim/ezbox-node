/**
 ** Page routes
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
 const router = require("express").Router();
 const page = require("../controllers/page");
 const { checkAuth } = require("../middleware/checkAuth");
 const {
   isValidated,
   pageValidate,
 } = require("../middleware/validators");
 const { upload } = require("../middleware/multer");
 
 /**
  ** Routes
  * @method get get Page data
  * @method post create Page data
  * @method put update Page data
  * @method delete Delete Page data
  *
  */
 
 //* Read
 router.post("/", page.getAll); //? Get All Page data
 router.post("/get_one", page.getOne); //? Get Single Page data
 
 router.post(
   "/",
   checkAuth,
   pageValidate,
   isValidated,
   page.create
 ); //? Create Page.
 router.put(
   "/:id",
   checkAuth,
  //  pageValidate,
   isValidated,
   page.update
 ); //? Update Page.
 router.delete("/:id", checkAuth, page.delete); //? delete Page data
 
 //* Export
 module.exports = router;
 