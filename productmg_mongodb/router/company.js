const express = require("express");
const router = express.Router();
router.use(express.json());

const cmpmodel = require("../model/cmp");

router.get("/",(req,res)=> res.send("Company Page"));

router.post("/addcmp",(req,res) =>
{
    const data = req.body;
    cmpmodel.create(data);

    return res.json({data:'Success'});

    console.log(data);
});

router.put("/update/:cmpid" , async(req,res) =>
{
    const c_id = req.params.cmpid;
    const pro_id = req.body.prodid;
    
    const cmp_name = req.body.cmpname;

    const update_data = {cmpname: cmp_name ,prodid:pro_id}

    const updatecmp = await cmpmodel.findOneAndUpdate
    (
        {cmpid: c_id}, update_data , {upsert:true} 
    );

    return res.json({data:"Updated..."});
});

router.delete("/deletecmp",(req,res) => 
{
    const cmp = req.body.cmpname;
    
    const deletecmp = cmpmodel.findOneAndDelete({ cmpname: cmp }, (err) => 
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("Record deleted.");
        }
    });

    return res.json({data:"Deleted..."});
});

module.exports = router;