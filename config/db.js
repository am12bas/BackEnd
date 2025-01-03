const mongoose =require('mongoose');
require('dotenv').config();

exports.connectDB = () =>{
    mongoose.connect(process.env.DB_URI)
    .then(()=> console.log("mongoose connected succecfully"))
    .catch(err => console.error("error has occured ",err));
}