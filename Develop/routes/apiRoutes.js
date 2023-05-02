const express = require('express');
const router = express.Router()

const path = require('path');
  
const { notes } = require("./db/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//creating note
function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};  
  

  // Set up a POST route to save notes to db.json
  router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });
  
  router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });
  
  router.get('/api/notes', (req, res) => {
    res.json(notes);
  });
  
  router.post('/api/notes', (req, res) => {
    req.body.id = generateUniqueId();
    const note = createNewNote(req.body, notes);
    res.json(note);
  });

    
//GET ROUTE NOTES.HTML
app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/notes.html')
}) 

//GET ROUTE INDEX.HTML
app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html')
}) 

    module.exports = router;