const express = require('express');
const router = express.Router()

router.get('/api/notes', (req, res) => {
    const note =req.body;
    readFileAsync('./develop/db/db', 'utf8')
    .then(function(data) {
      
    })
  })
  
  
  
  // Set up a POST route to save notes to db.json
  router.post("/api/notes", (req, res) => {
      const note = req.body;
      const notesData = JSON.parse(fs.readFileSync("./db.json"));
      note.id = notesData.length + 1;
      notesData.push(note);
      fs.writeFileSync("./db.json", JSON.stringify(notesData));
      res.json(note);
    });
    
    // Set up a GET route to retrieve notes from db.json
    router.get("/api/notes", (req, res) => {
      const notesData = JSON.parse(fs.readFileSync("./db.json"));
      res.json(notesData);
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