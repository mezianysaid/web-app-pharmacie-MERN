var express = require('express');
var router = express.Router();
const Product = require('../models/_product')
const multer = require('multer');
require('dotenv').config();
const uploadpath=process.env.uploadPath
/* GET users listing. */
router.get('/ProductsList', async(req, res) => {
  try {
      const prods = await Product.find();    
      res.status(200).send(prods);
  } catch (error) {
    res.status(404).send("there is an error in products request !!!")
  }
});

var diskstorage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, "public/images")
  },
  filename: (req, file, cb) => {
      const mimeType = file.mimetype.split('/');
      const fileType = mimeType[1];
      const fileName = file.originalname;
      cb(null, fileName);
  }
});
var storage = multer({ storage: diskstorage }).single('image');

// ADD A PRODUCT 
router.post('/addProduct', storage,async(req, res) => {
  const imagePath = uploadpath + req.file.originalname;
  try{
      let prod=new Product({
          name:req.body.name,
          category:req.body.category,
          image:imagePath
          })
      await prod.save();
      return res.json('the Product added Successfully');
  }catch(err){
      res.send(err)
  }

})











module.exports = router;
