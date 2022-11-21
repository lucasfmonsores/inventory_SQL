import { openDb } from "../configDB.js";

export default async  function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Person ( id INTEGER PRIMARY KEY, name TEXT, age INTEGER) ')
    })
}

export async function insertPerson(person){
    openDb().then(db=>{
        db.run('INSERT INTO Person (name, age) VALUES (?,?)', [person.name, person.age]);
    });
}