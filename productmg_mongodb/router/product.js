const express = require("express");
const router = express.Router();
const promodel =require("../model/pro"); 
router.use(express.json());

router.get("/",(req,res)=> res.send("Product page"));

router.post("/addproduct" ,(req,res) => 
{
    const pro_data = req.body;
    promodel.create(pro_data);
    
    return res.json({data:"Inserted..."});
});

router.put("/update/:p_id" , async(req,res) =>
{
    const p_id = req.params.p_id;
    const pro_update = req.body;
    
    const updatecmp = await promodel.findOneAndUpdate
    (
        {p_id: p_id}, pro_update , {upsert:true}     
    );

    return res.json({data:"Updated..."});
});

router.delete("/deleteproduct",(req,res) => 
{
    const dltpro = req.body.p_id;
 
    const deletepro = promodel.findOneAndDelete({ p_id: dltpro }, (err) => 
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