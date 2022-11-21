//import {openDb} from './configDB.js';


import createTable from './controler/person.js';
import express from 'express';
const app = express();
app.use(express.json())

createTable(); 

app.get('/', function(req, res){
    res.send("ola mundooooo")
})

app.post('/person', function(req, res){
    console.log(req.body);
    res.json({
        "statucCode": 200
    })
}) 

app.listen(3000, ()=>console.log("api running"))

