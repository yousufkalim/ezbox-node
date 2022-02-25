/**
 ** All the validation
 * @author Yousuf Kalim
 * @author Najam Ul Saqib
 */
const { check, validationResult } = require("express-validator");

/**
====================
** Validations
====================
*/

//? You can create multiple validations strategies (Read express-validator documentation for more details)
//* User Signup Validation
exports.validateUser = [
  //  check("name", "Name is required.").notEmpty().trim(),
  check("email", "Email is required.").notEmpty().isEmail().trim(),
  check("password")
    .notEmpty()
    .withMessage("Password is required.")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be 8 characters long."),
  check("confirmPassword")
    .notEmpty()
    .withMessage("Confirm Password is required.")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Confirm Password must be 8 characters long."),
];

//* User Signup Validation
exports.validateUserUpdate = [
  check("name", "Name is required.").notEmpty().trim(),
  check("email", "Email is required.").notEmpty().isEmail().trim(),
];

//* Login validation
exports.validateLogin = [
  check("email", "Email is required").notEmpty().isEmail().trim().toLowerCase(),
  check("password").notEmpty().withMessage("Password is required."),
];

//* Change password validation
exports.changePasswordValidate = [
  check("oldPassword")
    .notEmpty()
    .withMessage("Password is required.")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be 8 characters long."),
  check("newPassword")
    .notEmpty()
    .withMessage("Password is required.")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be 8 characters long."),
  check("confirmPassword")
    .notEmpty()
    .withMessage("Password is required.")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be 8 characters long."),
];

//* Create/Update Navigation Validation
exports.navigationValidate = [
  check("blog")
    .notEmpty()
    .withMessage("Blog link is Required.")
    .custom((value) => isValidUrl(value))
    .withMessage("Invalid Blog URL"),
  check("forum")
    .notEmpty()
    .withMessage("Forum link is Required.")
    .custom((value) => isValidUrl(value))
    .withMessage("Invalid Forum URL"),
  check("facebook")
    .optional()
    .custom((value) => isValidUrl(value))
    .withMessage("Invalid Facebook URL"),
  check("instagram")
    .optional()
    .custom((value) => isValidUrl(value))
    .withMessage("Invalid Instagram URL"),
  check("whatsapp")
    .optional()
    .isNumeric()
    .withMessage("Whatsapp Number is Invalid")
    .isLength(12)
    .withMessage("Write Phone Number in this format '33XXXXXXXXXX'."),
  check("linkedIn")
    .optional()
    .custom((value) => isValidUrl(value))
    .withMessage("Invalid LinkedIn URL"),
  check("twitter")
    .optional()
    .custom((value) => isValidUrl(value))
    .withMessage("Invalid Twitter URL"),
  check("tiktok")
    .optional()
    .custom((value) => isValidUrl(value))
    .withMessage("Invalid Tiktok URL"),
  check("email").optional().isEmail().withMessage("Invalid Email Address."),
];
exports.homeScreenValidate = [
  check("text").notEmpty().withMessage("Text is required"),
  check("yt_link").notEmpty().withMessage("Invalid Youtube URL"),
];
exports.advertisingValidate = [
  check("title").notEmpty().withMessage("Title is required"),
  check("text").notEmpty().withMessage("Text is required"),
  check("textbottom").notEmpty().withMessage("Bottom text is required"),
  check("leftImg").notEmpty().withMessage("Left Image is required"),
  check("centerImg").notEmpty().withMessage("Center Image is required"),
  check("rightImg").notEmpty().withMessage("Right image is required"),
];
exports.productDevValidate = [
  check("text").notEmpty().withMessage("Text is required"),
  check("leftImg").notEmpty().withMessage("Left Image is required"),
  check("centerImg").notEmpty().withMessage("Center Image is required"),
  check("rightImg").notEmpty().withMessage("Right image is required"),
];
exports.consultingValidate = [
  check("text").notEmpty().withMessage("Text is required"),
  check("textbottom").notEmpty().withMessage("Bottom text is required"),
];
exports.reviewValidate = [
  check("name").notEmpty().withMessage("name is required"),
  check("rating").notEmpty().withMessage("rating is required"),
  check("message").notEmpty().withMessage("message is required"),
];
exports.productValidate = [
  check("title").notEmpty().withMessage("Title is required"),
  check("description").notEmpty().withMessage("Description is required"),
];
exports.contactUsValidate = [
  check("name").notEmpty().withMessage("Title is required"),
  check("number")
    .optional()
    .isNumeric()
    .withMessage("Phone Number is Invalid")
    .isLength(12)
    .withMessage("Write Phone Number in this format '33XXXXXXXXXX'."),
  check("email").notEmpty().withMessage("Email is required"),
  check("message").notEmpty().withMessage("Message is required"),
];

/**
 ** Check Url
 * @param {String} value
 * @returns {Boolean}
 */
const isValidUrl = (value) => {
  const matchpattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  return matchpattern.test(value);
};
/**
======================
** Result
======================
*/

/**
 ** To check if request validated successfully or not, according to our validation strategies
 * @param {object} req
 * @param {object} res
 * @param {*} next
 */
exports.isValidated = (req, res, next) => {
  const errors = validationResult(req); //? Validating the request by previous middleware's strategy
  if (!errors.isEmpty()) {
    //? On error
    res.status(400).send({ success: false, message: errors.array()[0] }); //? Sending first error to the client from array of errors
  } else {
    //? Validated successfully
    next(); //? Pass the request to next middleware or controller
  }
};
