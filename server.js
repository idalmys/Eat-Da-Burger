const express = require("express");
const exhdbs =require("express-handlebars");
const path=require("path");

const app=express();

//Settings
app.set("port", process.env.Port || 8080);
app.set("views",path.join(__dirname,"views"));
app.engine(".hbs",exhdbs(
    {
        defaultLayout:"main",
        layoutsDir:path.join(app.get("views"),"layouts"),
        extname:".hbs"
       
    }
))
app.set("view engine",".hbs");


//Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());


//Routes
app.use(require("./controllers/burgers_controllers"));


//Public
app.use(express.static("public"));

//Server
app.listen(app.get("port"), ()=>{
    console.log("Server on Port" , app.get("port"));
});