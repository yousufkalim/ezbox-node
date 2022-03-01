/**
 ** AppRoute routes
 * @author Najam Ul Saqib
 * @author Umar Bin Ayaz
 */
 const router = require("express").Router();
 const appRoute = require("../controllers/appRoutes");
 const { checkAuth } = require("../middleware/checkAuth");
 const {
   isValidated,
   appRouteValidate,
 } = require("../middleware/validators");
 const { upload } = require("../middleware/multer");
 
 /**
  ** Routes
  * @method get get AppRoute data
  * @method post create AppRoute data
  * @method put update AppRoute data
  * @method delete Delete AppRoute data
  *
  */
 
 //* Read
 router.get("/", appRoute.getAll); //? Get All AppRoute data
 router.get("/:id", appRoute.getById); //? Get Single AppRoute data
 
 router.post(
   "/",
   checkAuth,
   appRouteValidate,
   isValidated,
   appRoute.create
 ); //? Create AppRoute.
 router.put(
   "/:id",
   checkAuth,
   appRouteValidate,
   isValidated,
   appRoute.update
 ); //? Update AppRoute.
 router.delete("/:id", checkAuth, appRoute.delete); //? delete AppRoute data
 
 //* Export
 module.exports = router;
 