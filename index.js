
const express=require("express");
const app=express();
const bodyParser = require('body-parser')
const db = require('./config/mongoose');
const productRoute = require('./routes/products_api')
const port =  3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//Routes
app.use('/',require('./routes/index'));


app.listen(port,(err)=>{
    
    if(err){
        console.log("Error in running the server");
        return;
    }
    console.log(` Server is Running on PORT ${port}`);
});

