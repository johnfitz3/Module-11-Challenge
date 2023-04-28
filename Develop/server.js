const fs = require('fs');
const express = require('express');
const path = require('path');
const util = require('util')
const notesRoute = require('./routes/apiRoutes');
//creating server
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
 

//middleware
app.use(express.static('./develop/public'));




  
  // Start the server
  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });