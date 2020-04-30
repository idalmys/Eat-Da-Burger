const express=require("express");
const router=express.Router();
const path=require("path");

router.get("/",(req,res)=>{
   res.render("index.hbs")
  // res.send("hola")
})
router.post("/",(req,res)=>{
    res.send("hola")
})

module.exports=router;