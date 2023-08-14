const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  _id : mongoose.Types.ObjectId,
  title : String,
  price : Number,
  product_url : String,
  img_url : String,
}) 

module.exports = mongoose.model("Product", ProductSchema)