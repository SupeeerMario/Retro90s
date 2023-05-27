const express = require("express");
const { verifyTokenAndAdmin } = require("./verifyToken");
const Product2 = require("../models/Product2");
const router = express.Router();
const { default: mongoose } = require("mongoose");

/////////////////////////////////////////////////////////
const multer = require("multer");


const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    const timestamp = new Date().toISOString().replace(/:/g, "-");
    cb(null, timestamp + file.originalname);
  }
});

const fileFilter = (req, file, cb) =>{
  //reject a file
  if(file.mimetype === 'image/jpeg' || 'image/jpg' || 'image/webp' || file.mimetype === 'image/png'){
    cb(null, true);
  }else{
   cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB file size limit
  },
  fileFilter: fileFilter
});
/////////////////////////////////////////////////////////


router.post("/", upload.single('productImage'), verifyTokenAndAdmin, async (req, res) => {
  const title = req.body.title;
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newProduct = new Product2({
    title: title,
    shortdesc: req.body.shortdesc,
    longdesc: req.body.longdesc,
    categories: req.body.categories,
    price: req.body.price,
    productImage: req.body.productImage
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});



  
 //Update
 router.put("/:id",verifyTokenAndAdmin,async (req,res)=>{

    try{
        const updatedProduct = await Product2.findByIdAndUpdate(req.params.id, {
            $set : req.body
        },{new:true})
        res.status(200).json(updatedProduct);
    }catch(err){res.status(500).json(err);}
})


//DELETE
router.delete("delete/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Product2.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });


    
//GET Product
router.get("/find/:id", async (req, res) => {

    Product2.find()
      .select("title productImage price shortdesc longdesc categories")
      .exec()

    try {
      const product = await Product2.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });



//GET ALL Products
router.get("/", async (req, res) => {
    const qcategory = req.query.category;
    Product2.find()
      .select("title productImage price shortdesc longdesc categories")
      .exec()

    try {
        let product;
        
        if(qcategory){
            product = await Product2.find({categories:{
                $in:[qcategory],
            }
        });
        }else{
            product = await Product2.find();
        }

      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });




module.exports = router;