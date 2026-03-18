const mongoose = require('mongoose');

const urlschema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    url_id:{
        type:String, 
        required:true
    }
});

const model = new mongoose.model("url" , urlschema);

module.exports = model ; 