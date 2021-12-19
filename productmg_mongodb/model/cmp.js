const mongoose = require("mongoose");

const cmpSchema = mongoose.Schema({
    cmpname:String,
    cmpid:String,
    prodid:[{type:String}],
});

const cmpmodel = mongoose.model("company",cmpSchema,"company");

module.exports = cmpmodel;