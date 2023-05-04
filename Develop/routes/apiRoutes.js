const router = require('express').Router();
const path = require('path');

const { notes } = require('./db/db.js');

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/api/notes', (req, res) => {
  res.json(notes);
});

router.post('/api/notes', (req, res) => {
  req.body.id = generateUniqueId();
  const note = createNewNote(req.body, notes);
  res.json(note);
});

module.exports = router;