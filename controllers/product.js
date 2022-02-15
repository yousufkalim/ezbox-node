/**
 ** Products
 * @author Najam Ul Saqib
 */
const Products = require("../models/Products");

/**
 ** Get All products
 * @param {object} req 
 * @param {object} res 
 */
exports.getAll = async (req, res) => {
  try {
    let products = await Products.find(); //? find all products
    return res.status(200).json({ success: true, products });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Get Product by Id
 * @param {object} req 
 * @param {object} res 
 */
exports.getById = async (req, res) => {
  try {
    let product = await Products.findById(req.params.productId); //? get prduct by id
    return res.status(200).json({ success: true, product });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Create Product
 * @param {object} req 
 * @param {object} res 
 */
exports.create = async (req, res) => {
  try {
    if (req.file) { //? cehck if request contains file
      req.body.image = req.file.path; //? assign file name to body.image
    }
    await Products.create(req.body).then((product, err) => { //? create product
      if (err) throw err;
      res.status(200).json({
        success: true,
        message: "Product Created Sucessfully!",
        product,
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Update Product
 * @param {object} req 
 * @param {object} res 
 */
exports.update = async (req, res) => {
  try {
    if (req.file) { //? check if request have file.
      req.body.image = req.file.path; //? assign file path to body.image
    }
    await Products.findByIdAndUpdate(req.params.productId, req.body).then( //? update product
      (product, err) => {
        if (err) throw err;
        res.status(200).json({
          success: true,
          message: "Product Updated Sucessfully!",
          product,
        });
      }
    );
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/**
 ** Delete Product
 * @param {object} req 
 * @param {object} res 
 */
exports.delete = async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.productId).then((product) => { //? delete product by its id
      res.status(200).json({
        success: true,
        message: "Product Deleted Sucessfully!",
        product,
      });
    });
  } catch (err) {
    //? Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
