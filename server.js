const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.listen(PORT, () => {
  console.log('Server is up and running');
});
