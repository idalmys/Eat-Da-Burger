const express = require("express");
const exhdbs =require("express-handlebars");
const path=require("path");

const app=express();

//Settings
var port = process.env.PORT || 3000;

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
app.listen(port, ()=>{
    console.log("Server on Port" , port);
});