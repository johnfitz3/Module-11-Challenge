const fs = require('fs');
const path = require('path');

const notes = require('../db/notes');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
  };  
  

  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({ notes: [] }, null, 2));

  module.exports = createNewNote;
  