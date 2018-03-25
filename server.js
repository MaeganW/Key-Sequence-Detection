const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));

app.listen(port, () => {
  console.log(`Server spinning up on port ${port}`);
});