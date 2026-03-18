const dotenv =  require('dotenv');
dotenv.config();
const express =  require('express');
const mongoose = require('mongoose');
const mongodb_connect = require('./db/mongodb_connect');
const model = require('./db/model/model');
const { nanoid } = require('nanoid');





const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongodb_connect();

app.get('/', (req,res)=>{
    res.render('form')
})

app.get('/:id' , async  (req,res)=>{
    let url_id = req.params.id ; 

    const result = await model.findOne({ url_id: url_id });

    if(!result ){
        return res.send("Not Found");
    }
    const url = result.url ; 
    res.render("your_url" , {url});

    
})

app.post('/url', async (req , res )=>{
    const u_id = nanoid(7); 
    const {url} = req.body ; 

    if(!url){
        return res.send("Please Submit the url")
    }

    const newUrl = new model({
        url:url ,
        url_id: u_id
    });
    await newUrl.save();

    const our_url = `http://localhost:3000/${u_id}`;

    res.render('short_url' , {our_url})
    

    

})

app.listen(process.env.PORT || 3000 , ()=>{
    
    console.log(`Server running on Port ${process.env.PORT}`);
    
})