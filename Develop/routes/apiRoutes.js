const fs = require('fs');
const express = require('express');
const router = express.Router()
const path = require('path');
  
const { notes } = require('../../db/notes');




//Routes
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
res.json(notes);
});

app.post('/api/notes', (req, res) => {
req.body.id = generateUniqueId();
const note = createNewNote(req.body, notes);
res.json(note);
});

    module.exports = router;