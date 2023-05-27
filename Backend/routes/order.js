const express = require("express");
const { verifyToken, verifyTokenAndauthorization, verifyTokenAndAdmin } = require("./verifyToken");
const Order = require("../models/Order");
const router = express.Router();

//Create

router.post("/", verifyToken, async (req,res)=>{
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err)
    }

})



 //Update
router.put("/:id",verifyTokenAndAdmin,async (req,res)=>{

    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set : req.body
        },{new:true})
        res.status(200).json(updatedOrder);
    }catch(err){res.status(500).json(err);}
})


//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Order has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });


//GET User Order
router.get("/find/:userId",verifyTokenAndauthorization, async (req, res) => {
    try {
      const orders = await Order.find({userId: req.params.userId});
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });



//GET ALL Orders

router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const orders = await Orders.find()
        res.status(200).json(carts)
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;