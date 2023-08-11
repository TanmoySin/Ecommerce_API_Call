const mongoose = require('mongoose');

// Connecting the database with Database Name ECommerce_API
mongoose.connect("mongodb+srv://tanmoysin1997:Iamgood111@blog-app.2swpsxg.mongodb.net/test?retryWrites=true&w=majority");

const db = mongoose.connection;

// on unsuccessfull connection ,  If Any Error occurs during connection
db.on('error',console.error.bind(console,"Error connecting to DataBase"));


//on succesfull connection
db.once('open',function(){
    console.log(" Your Database is connected and good to go !!!");
});

module.exports = db;