const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/data.json');

app.use(cors());

//function to return bets if some values in odds array meet condition
const getOdds = returnOdds => data.bets.filter(elem => elem.odds.some(returnOdds));

app.get('/decimalOddsMoreThanTwo', (req, res) => {
  const moreThanTwo = item => item.oddsDecimal > 2;
  res.json(getOdds(moreThanTwo));
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
  const lessThanTwo = item => item.oddsDecimal < 2;
  res.json(getOdds(lessThanTwo));
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));