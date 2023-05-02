const fs = require('fs');
const express = require('express');
const path = require('path');
const util = require('util')
const apiRoute = require('./routes/apiRoutes');
app.use('/apiRoutes', apiRoute);


//creating server
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//middleware
app.use(express.static('./develop/public'));

  // Start the server
  app.listen(PORT, () => {
    console.log("Server is listening on port 3000");
  });
