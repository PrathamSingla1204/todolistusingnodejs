const express = require('express');
const app = express();   //setup app using express server
const port = 8001;       //port 
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(express.static('./assets'));

app.use('/',require('./routes'));  //routing using express router 

app.set('view engine','ejs');  //setting up view engine as ejs
app.set('views','./views');    //views path directory


app.listen(port,(err)=>{
    if(err){
        console.log(`Error : ${err}`)
        return;
        }
        console.log(`server is running on ${port}`);
    });
