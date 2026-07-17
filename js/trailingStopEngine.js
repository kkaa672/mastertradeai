/*
=====================================
MASTERTRADE AI
Trailing Stop Engine
Versi 1.0
=====================================
*/

const TrailingStopEngine = {

    version: "1.0",

    enabled: true,

    direction: "NONE",

    entryPrice: 0,

    currentPrice: 0,

    currentStopLoss: 0,

    trailingDistance: 0,

    lockedProfit: 0,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.direction = "BUY";

            this.entryPrice = 3330.00;

            this.currentPrice = 3345.00;

            this.currentStopLoss = 3338.00;

            this.trailingDistance = 7.00;

            this.lockedProfit = 8.00;

        }

        return{

            enabled: this.enabled,

            direction: this.direction,

            entryPrice: this.entryPrice,

            currentPrice: this.currentPrice,

            currentStopLoss: this.currentStopLoss,

            trailingDistance: this.trailingDistance,

            lockedProfit: this.lockedProfit

        };

    },

    getTrailingStop(){

        return{

            enabled: this.enabled,

            direction: this.direction,

            entryPrice: this.entryPrice,

            currentPrice: this.currentPrice,

            currentStopLoss: this.currentStopLoss,

            trailingDistance: this.trailingDistance,

            lockedProfit: this.lockedProfit

        };

    },

    reset(){

        this.enabled = true;

        this.direction = "NONE";

        this.entryPrice = 0;

        this.currentPrice = 0;

        this.currentStopLoss = 0;

        this.trailingDistance = 0;

        this.lockedProfit = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("TRAILING STOP ENGINE");
console.log("================================");

console.log(

    TrailingStopEngine.analyze(true)

);
