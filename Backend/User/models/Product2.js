const { TryRounded } = require("@mui/icons-material");
const mongoose = require("mongoose")


const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, require:true},
        shortdesc:{type:String, require:true},
        longdesc:{type:String, require:true },
        categories:{type:Array, require:true},
        price:{type:Number, require:true },
        productImage:{type:String, require:true },

    },{timestamps:true});

    module.exports = mongoose.model("Product2", ProductSchema);