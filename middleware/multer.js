/**
 ** Multer strategy to upload images
 * @author Yousuf Kalim
 * @author Najam Ul Saqib
 */
const multer = require("multer");
const fs = require("fs");

//* Multer strategy for local uploading. (Read multer's documentation for more details)
exports.upload = multer({
  //? to store images
  storage: multer.diskStorage({
    //? Defining the path where we have to store the image
    destination: function (req, file, cb) {
      //? destination folder
      if (!fs.existsSync("./uploads")) {
        //? chk if folder do not exist
        fs.mkdirSync("./uploads"); //? create folder
      }
      cb(null, "./uploads");
    },
    //? Creating a unique filename to avoid duplication error
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname); //? Callback
    },
  }),
  //? File size limit upto 5 mb
  limits: {
    fileSize: 1024 * 1024 * 15,
  },
});
