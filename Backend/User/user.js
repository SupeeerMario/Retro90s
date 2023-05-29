const User = require("./models/User");
const {
  verifyToken,
  verifyTokenAndauthorization,
  verifyTokenAndAdmin,
} = require("../routes/verifyToken");
const router = require("express").Router();
const CryptoJS = require("crypto-js");


// CREATE
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Update
router.put("/:id", verifyTokenAndauthorization,async (req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
          ).toString();
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set : req.body
        },{new:true})
        res.status(200).json(updatedUser);
    }catch(err){res.status(500).json(err);}
})

//DELETE
router.delete("/:id", verifyTokenAndauthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password,...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET ALL USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;