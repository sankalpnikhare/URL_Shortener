const dotenv =  require('dotenv');
const express =  require('express');
const mongoose = require('mongoose');
const mongodb_connect = require('./db/mongodb_connect');
dotenv.config();


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongodb_connect();


app.listen(process.env.PORT || 3000 , ()=>{
    
    console.log(`Server running on Port ${process.env.PORT}`);
    
})