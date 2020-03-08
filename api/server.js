const express = require('express');
const app = express();
const cors = require('cors');

const data = require('./data/data.json');

app.use(cors());

app.get('/decimalOddsMoreThanTwo', (req, res) => {
  const moreThanTwo = data.bets.filter(elem => elem.odds.some(item => item.oddsDecimal > 2));

  res.json(moreThanTwo);
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
  const lessThanTwo = data.bets.filter(elem => elem.odds.some(item => item.oddsDecimal < 2));

  res.json(lessThanTwo);
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});