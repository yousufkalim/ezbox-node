/**
 ** User Routes
 * @author Najam Ul Saqib
 */
const router = require("express").Router();
const user = require("../controllers/user");
const { checkAuth } = require("../middleware/checkAuth");
const {
  validateUser,
  isValidated,
  validateUserUpdate,
} = require("../middleware/validators");
/**
 ** User Routes
 *  @method Post create user
 *  @method get get all users
 *  @method get get User by Id
 *  @method delete Delete user
 *  @method put update user
 */
router.post(
  "/",
  validateUser, //? validate user data
  isValidated, //? chk if user data is valid or not
  user.create //? create user controller
);
router.get("/", checkAuth, user.getAll); //? to all users
router.get("/:userId", user.getById); //? to get user by its id
router.delete("/:userId", user.delete); //? delete user
router.put("/:userId", validateUserUpdate, isValidated, user.updateUser); //? update user

module.exports = router;
