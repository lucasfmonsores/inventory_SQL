//import {openDb} from './configDB.js';


import createTable, { insertPerson, updatePerson } from './controler/person.js';
import express from 'express';
const app = express();
app.use(express.json())

createTable(); 

app.get('/', function(req, res){
    res.send("ola mundooooo")
});

app.post('/person', function(req, res){
    insertPerson(req.body); 
    res.json({
        "statucCode": 200
    })
});

app.put('/person', function(req, res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode":"400",
            "msg":"you need type id"
        })
    }else{
    updatePerson(req.body); 
    res.json({
        "statucCode": 200
    })
}
});

app.listen(3000, ()=>console.log("api running"))

