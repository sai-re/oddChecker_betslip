const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/decimalOddsMoreThanTwo', (req, res) => {
    // code here
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
    // code here
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});