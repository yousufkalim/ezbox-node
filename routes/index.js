/**
 ** All api routes handles here
 * @author Yousuf Kalim
 * @author Najam Ul Saqib
 */
const router = require("express").Router();

//* Parent Routes

router.use("/auth", require("./auth")); //? All the auth routes
router.use("/admins", require("./admins")); //? All the auth routes
router.use("/homeScreen", require("./homeScreen")); //? All the homeScreen routes
router.use("/pages", require("./pages")); //? All the pages routes
router.use("/product", require("./products")); //? All the Product routes
router.use("/contact", require("./contactUs")); //? All the contact
router.use("/image", require("./image")); //? All the contact
router.use("/reviews", require("./reviews")); //? All the reviewes

//* Export
module.exports = router;
