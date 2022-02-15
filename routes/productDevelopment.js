/**
 ** Product Dev routes
 * @author Najam Ul Saqib
 */
 const router = require("express").Router();
 const productdev = require("../controllers/productDevelopment");
 const { checkAuth } = require("../middleware/checkAuth");
 const { isValidated, productDevValidate } = require("../middleware/validators");
 const { upload } = require("../middleware/multer");
 
 /**
  ** Routes
  * @method get get Product Dev data
  * @method post create or update Product Dev data
  * @method delete Delete Product Dev data
  *
  */
 
 //* Read
 router.get("/", productdev.getData); //? Get Product Dev data
  router.post(
    "/",
    checkAuth,
    upload.array('image'),
    productDevValidate,
    isValidated,
    productdev.createUpdate
  ); //? Create / Update Product Dev data.
   router.delete("/", checkAuth, productdev.delete); //? delete Product Dev data
 
 //* Export
 module.exports = router;
 