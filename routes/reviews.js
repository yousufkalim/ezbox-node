/**
 ** Product routes
 * @author Arooj Ishfaq
 */
const router = require("express").Router();
const review = require("../controllers/reviews");
const { checkAuth } = require("../middleware/checkAuth");
const { isValidated, reviewValidate } = require("../middleware/validators");
const { upload } = require("../middleware/multer");

/**
 ** Routes
 * @method get get reviews
 * @method get get review by id
 * @method post create review
 * @method put Update review
 * @method delete Delete review
 *
 */

//* Read
router.get("/", review.getAll); //? Get review
// router.get("/:reviewId", review.getById); //? Get review
router.post("/", checkAuth, reviewValidate, isValidated, review.create); //? Create review.
router.get("/:reviewId", review.getAll); //? Get review
router.put("/:reviewId", checkAuth, reviewValidate, isValidated, review.update); //? Update review.
router.delete("/:reviewId", checkAuth, review.delete); //? delete review

//* Export
module.exports = router;
