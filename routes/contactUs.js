/**
 ** Contact Us Routes
 * @author Najam Ul Saqib
 */
const router = require("express").Router();
const contactUs = require("../controllers/contactUs");
const { checkAuth } = require("../middleware/checkAuth");
const { isValidated, contactUsValidate } = require("../middleware/validators");
//*
/**
 * 
 * @method get get all messages
 * @method post create message
 * @method delete delete message
 */
router.get("/", checkAuth, contactUs.getAll); //? get all messages
router.post("/", contactUsValidate, isValidated, contactUs.create); //? send message
router.delete("/:msgId", checkAuth, contactUs.delete); //? delete message

//* Export
module.exports = router;
