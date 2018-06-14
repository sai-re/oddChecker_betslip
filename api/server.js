const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const database = require("./server/database");

function respondWithOdds(res, predicate) {
    res.json(database.getAllBetsByDecimal(predicate));
}

app.get('/decimalOddsMoreThanTwo', (req, res) => {
    respondWithOdds(res, o => o > 2);
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
    respondWithOdds(res, o => o < 2);
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});