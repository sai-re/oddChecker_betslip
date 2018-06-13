const data = require("../data/data.json");

exports.getAllBetsByDecimal = function(pre){
    return data.bets.filter(b => {
        for(let odds of b.odds)
            if(pre(odds.oddsDecimal))
                return true;

        return false;
    });
};