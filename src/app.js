const express = require('express');
const app = express();

app.get('/', function(rec, res){
    res.send("ola mundo")
})

app.listen(3000, ()=>console.log("api running"))