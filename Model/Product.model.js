const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title : String,
description : String,
price : Number,
category : String,
image: String,
owner: String,
  },{
    versionKey: false
});


const ProductsModel = mongoose.model("bugs", ProductSchema);


module.exports = {
    ProductsModel
}


// title : string
// description : string
// price : number
// category : Ref<Category>
// image: string
// owner: Ref<User>