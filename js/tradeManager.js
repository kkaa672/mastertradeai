/*
=====================================
MASTERTRADE AI
Trade Manager
Versi 1.0
=====================================
*/

const TradeManager = {

    version: "1.0",

    signal: "NO TRADE",

    direction: "NONE",

    entryPrice: 0,

    stopLoss: 0,

    takeProfit1: 0,

    takeProfit2: 0,

    takeProfit3: 0,

    lotSize: 0,

    confidence: 0,

    riskReward: "1:2",

    ready: false,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.signal = "BUY";

            this.direction = "BUY";

            this.entryPrice = 3330.00;

            this.stopLoss = 3320.00;

            this.takeProfit1 = 3340.00;

            this.takeProfit2 = 3350.00;

            this.takeProfit3 = 3360.00;

            this.lotSize = 0.10;

            this.confidence = 94;

            this.riskReward = "1:3";

            this.ready = true;

        }

        return{

            signal: this.signal,

            direction: this.direction,

            entryPrice: this.entryPrice,

            stopLoss: this.stopLoss,

            takeProfit1: this.takeProfit1,

            takeProfit2: this.takeProfit2,

            takeProfit3: this.takeProfit3,

            lotSize: this.lotSize,

            confidence: this.confidence,

            riskReward: this.riskReward,

            ready: this.ready

        };

    },

    getTradePlan(){

        return{

            signal: this.signal,

            direction: this.direction,

            entryPrice: this.entryPrice,

            stopLoss: this.stopLoss,

            takeProfit1: this.takeProfit1,

            takeProfit2: this.takeProfit2,

            takeProfit3: this.takeProfit3,

            lotSize: this.lotSize,

            confidence: this.confidence,

            riskReward: this.riskReward,

            ready: this.ready

        };

    },

    reset(){

        this.signal = "NO TRADE";

        this.direction = "NONE";

        this.entryPrice = 0;

        this.stopLoss = 0;

        this.takeProfit1 = 0;

        this.takeProfit2 = 0;

        this.takeProfit3 = 0;

        this.lotSize = 0;

        this.confidence = 0;

        this.riskReward = "1:2";

        this.ready = false;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("TRADE MANAGER");
console.log("================================");

console.log(

    TradeManager.analyze(true)

);
