//import {openDb} from './configDB.js';



import createTable, { insertPerson, updatePerson, selectPerson, selectPersons, deletePerson } from './controler/person.js'; 
import express from 'express';
const app = express();
import path from 'path'; 
app.use(express.json());
app.use(express.static('public'));

const __dirname = path.resolve();

createTable(); 



console.log(__dirname)
app.get('/', function(req, res){

    res.sendFile(path.join(__dirname, "./views/home.html")) 

});

app.get('/person',async function(req, res){
    let persons = await selectPersons();
    res.json(persons);
})
app.get('/persons',async function(req, res){
    let person = await selectPerson(req.body.id);
    res.json(person);
    console.log(`consulta encontrada no ID: ${person.id}` ) 
    console.log("-------------------")
    
    console.log(`Nome: ${person.name}` )
})

app.post('/person', function(req, res){
    insertPerson(req.body); 
    res.json({
        "statucCode": 200
    }
    
    )
    console.log(`registro Incluido Nome : ${req.body.name} ||| Idade: ${req.body.age} ||| Cidade: ${req.body.city} `);
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

app.delete('/person',async function(req, res){
    let person = await deletePerson(req.body.id);
    res.json(person);
    console.log(`registro deletado`) 
});



app.listen(3000, ()=>console.log("api running on local host 3000"))

