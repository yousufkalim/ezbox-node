/**
 ** Product routes
 * @author Najam Ul Saqib
 */
const router = require("express").Router();
const product = require("../controllers/product");
const { checkAuth } = require("../middleware/checkAuth");
const { isValidated, productValidate } = require("../middleware/validators");
const { upload } = require("../middleware/multer");

/**
 ** Routes
 * @method get get Products
 * @method get get product by id
 * @method post create product
 * @method put Update product
 * @method delete Delete product
 *
 */

//* Read
router.get("/", product.getAll); //? Get Product
router.get("/:productId", product.getById); //? Get Product

router.post("/", checkAuth, productValidate, isValidated, product.createUpdate); //? Create Product.
router.get("/:productId", product.getAll); //? Get Product

router.delete("/:productId", checkAuth, product.delete); //? delete Product

//* Export
module.exports = router;
