import {stocks} from "./stocks.js"

function generateRandomNumber(target,stockSymbol) {
    // Calculate the minimum and maximum values
    const min = target - 10;
    const max = target + 10;
    const randomNumber = Math.random() * (max - min) + min;
    const difference = randomNumber - target;
    const percentageDifference = (difference / target) * 100;
    const isDown = difference < 0;

    return {
        stockSymbol:stockSymbol,
        givenPrice:target,
        randomNumber: parseFloat(randomNumber.toFixed(2)),
        difference: parseFloat(difference.toFixed(2)),
        percentageDifference: parseFloat(percentageDifference.toFixed(2)),
        isDown:isDown
    };
}

export  function getLtp(symbol){
    for(let i = 0; i < stocks.length; i++){
        if(symbol == stocks[i].stockSymbol){
            return generateRandomNumber(Number(stocks[i].avgTradePrice),symbol);
        }
        
    }
}
getLtp()
console.log(stocks);