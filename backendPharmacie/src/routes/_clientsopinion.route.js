var express = require('express');
var router = express.Router();
const Opinion = require('../models/_opinion')
const multer = require('multer');
require('dotenv').config();
const uploadpath=process.env.uploadPath
/* GET users listing. */
router.get('/opinionsList', async(req, res) => {
  try {
      const opinions = await Opinion.find();    
      res.status(200).send(opinions);
  } catch (error) {
    res.status(404).send("there is an error in products request !!!")
  }
});


// ADD A PRODUCT 
router.post('/addOpinion', async(req, res) => {
  try{
    console.log(req.body.username)
      let opin=new Opinion({
          username:req.body.username,
          message:req.body.message
          })
      await opin.save();
      return res.json('your opinion has been  added Successfully');
  }catch(err){
      res.send(err)
  }

})











module.exports = router;
