const express = require("express");
const router = express.Router();
router.use(express.json());

const sellermodel = require("../model/seller");
const promodel =require("../model/pro"); 

router.get("/sellerOfProduct", async (req,res) =>
{
    const name = req.body.name;
    const details = await sellermodel.findOne({name:name});

    if(details)
    {
        const pDetail = await promodel.findOne({p_id:details["p_id"]});
        return res.json({data:pDetail});
    }
    
    return res.json({data:"No Data Found"});
});

router.post("/addseller",(req,res) =>
{
    const {addSeller} = req.body;

    if(addSeller)
    {
        sellermodel.create(addSeller);
        return res.json({data:"Inserted..."});
    }
    
    return res.json({data:"Something Wrong"});
});

router.put("/updateProductId", async (req,res) => 
{
    const sId = req.body.seller_id;
    const pId = req.body.p_id;
    const details = await sellermodel.findOne({seller_id:sId});

    if(details)
    {
        seller.findOneAndUpdate({seller_id:sId , product_id:pId});
        return res.json({data:"Updated..."});
    }
    
    return res.json({data:"No Data Found"});
});

router.delete("/deleteSeller", async (req,res) => 
{
    const sId = req.body.seller_id;
    const details = await sellermodel.findOne({seller_id:sId});

    if(details)
    {
        sellermodel.findOneAndDelete({seller_id:sId});
        return res.json({data:"Deleteed..."});
    }
    
    return res.json({data:"No Data Found"});
});

module.exports = router;