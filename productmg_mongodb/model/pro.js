const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    p_id: String,
    title: String,
    price: String,
    category: [{type:String}],
    company_id : String,
    seller_id : [{type:String}],
});

const productmodel = mongoose.model("product",productSchema,"product");

module.exports = productmodel;