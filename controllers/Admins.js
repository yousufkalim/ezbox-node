/**
 ** User controllers
 * @author Yousuf Kalim
 */
const Users = require("../models/Admins");
const bcrypt = require("bcryptjs");
const bcryptSalt = process.env.BCRYPT_SALT || 10;
const jwt = require("jsonwebtoken");
const tokenSecret = process.env.JWT_SECRET;

/**
 ** Create User - Signup
 * @param {object} req
 * @param {object} res
 */
exports.create = async (req, res) => {
  try {
    let { email, password, confirmPassword } = req.body; //? Getting required fields from body
    const existingUser = await Users.findOne({ email }); //? Finding already existing user

    //? Extra Validations
    if (existingUser) {
      //? If we found existing user in db
      return res
        .status(409)
        .json({ success: false, message: "User already exists." });
    } else if (password !== confirmPassword) {
      //? Passwords not same
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password are not same.",
      });
    }

    //? Creating User
    req.body.password = bcrypt.hashSync(password, parseInt(bcryptSalt)); //? Hashing the password with salt 8
    const user = await Users.create(req.body); //? Adding user in db

    //? Done
    res.json({ success: true, user }); //? Success
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// Login
exports.login = async (req, res) => {
  try {
    // Getting email and password
    const { email, password } = req.body;

    // Getting user from db
    let admin = await Users.findOne({ email });

    if (!admin) {
      // If admin not found
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    } else if (!admin.active) {
      // If admin not found
      return res
        .status(400)
        .json({ success: false, message: "Your account is not activated" });
    }

    // Comparing password
    const isMatched = bcrypt.compareSync(password, admin.password);

    if (!isMatched) {
      // If password not matched
      return res
        .status(400)
        .json({ success: false, message: "Invalid Password" });
    }

    // Creating payload with admin object
    const payload = { admin };

    // Generating token
    jwt.sign(payload, tokenSecret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;

      // done
      res.json({ success: true, admin, token });
    });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Get all users
 * @param {object} req
 * @param {object} res
 */
exports.getAll = async (req, res) => {
  try {
    const users = await Users.find(); //? Finding all the users from db
    res.json({ success: true, users }); //? Success
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Get user by id
 * @param {object} req
 * @param {object} res
 */
exports.getById = async (req, res) => {
  try {
    const userId = req.params.userId; //? Getting user id from URL parameter
    const user = await Users.findById(userId); //? Finding user by id
    res.json({ success: true, user }); //? Success
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Update user
 * @param {object} req
 * @param {object} res
 */
exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.userId; //? Getting user id from URL parameter
    const user = await Users.findByIdAndUpdate(userId, req.body, { new: true }); //? Updating the user
    res.json({ success: true, user }); //? Success
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Delete user
 * @param {object} req
 * @param {object} res
 */
exports.delete = async (req, res) => {
  try {
    const userId = req.params.userId; //? Getting user id from URL parameter
    const user = await Users.findByIdAndDelete(userId); //? Deleting the user
    res.json({ success: true, user }); //? Success
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
