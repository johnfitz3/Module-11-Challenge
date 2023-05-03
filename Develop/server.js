
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;


const apiRoutes = require('./routes/apiRoutes');


app.use('/api', apiRoutes);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = router;







