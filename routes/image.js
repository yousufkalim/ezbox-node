/**
 ** Advertising routes
 * @author Najam Ul Saqib
 */
const router = require("express").Router();
const { upload } = require("../middleware/multer");

router.post("/", upload.single("image"), (req, res) => {
  res.json({ success: true, url: req.file.path });
}); //? Create / Update Advertising.

//* Export
module.exports = router;
