const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');



async function mongodb_connect(){
    mongoose.connect(process.env.MONGO_URI);
    console.log("______Connected to DB__________")
};

module.exports = mongodb_connect ; 