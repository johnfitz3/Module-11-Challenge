const fs = require('fs');
const express = require('express');
const path = require('path');
const util = require('util')

//creating server

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
 

//middleware
app.use(express.static('./develop/public'));

//GET ROUTE NOTES.HTML
app.get('/notes', (req, res) => {
    res.sendFile(__dirname + '/notes.html')
}) 

//GET ROUTE INDEX.HTML
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index.html')
}) 




// Set up a POST route to save notes to db.json
app.post("/api/notes", (req, res) => {
    const note = req.body;
    const notesData = JSON.parse(fs.readFileSync("./db.json"));
    note.id = notesData.length + 1;
    notesData.push(note);
    fs.writeFileSync("./db.json", JSON.stringify(notesData));
    res.json(note);
  });
  
  // Set up a GET route to retrieve notes from db.json
  app.get("/api/notes", (req, res) => {
    const notesData = JSON.parse(fs.readFileSync("./db.json"));
    res.json(notesData);
  });
  
  // Start the server
  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });