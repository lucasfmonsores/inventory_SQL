//import {openDb} from './configDB.js';



import createTable, { insertPerson, updatePerson, selectPerson, selectPersons } from './controler/person.js';
import express from 'express';
const app = express();
app.use(express.json())

createTable(); 

app.get('/', function(req, res){
    res.send("ola")  

});

app.get('/persons',async function(req, res){
    let persons = await selectPersons();
    res.json(persons);
})
app.get('/person',async function(req, res){
    let person = await selectPerson(req.body.id);
    res.json(person);
})

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

