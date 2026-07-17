/*
=====================================
MASTERTRADE AI
Take Profit Engine
Versi 1.0
=====================================
*/

const TakeProfitEngine = {

    version: "1.0",

    entryPrice: 0,

    stopLoss: 0,

    tp1: 0,

    tp2: 0,

    tp3: 0,

    riskReward: "1:2",

    direction: "NONE",

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.entryPrice = 3330.00;

            this.stopLoss = 3320.00;

            this.tp1 = 3340.00;

            this.tp2 = 3350.00;

            this.tp3 = 3360.00;

            this.riskReward = "1:3";

            this.direction = "BUY";

        }

        return{

            entryPrice: this.entryPrice,

            stopLoss: this.stopLoss,

            tp1: this.tp1,

            tp2: this.tp2,

            tp3: this.tp3,

            riskReward: this.riskReward,

            direction: this.direction

        };

    },

    getTakeProfit(){

        return{

            entryPrice: this.entryPrice,

            stopLoss: this.stopLoss,

            tp1: this.tp1,

            tp2: this.tp2,

            tp3: this.tp3,

            riskReward: this.riskReward,

            direction: this.direction

        };

    },

    reset(){

        this.entryPrice = 0;

        this.stopLoss = 0;

        this.tp1 = 0;

        this.tp2 = 0;

        this.tp3 = 0;

        this.riskReward = "1:2";

        this.direction = "NONE";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("TAKE PROFIT ENGINE");
console.log("================================");

console.log(

    TakeProfitEngine.analyze(true)

);
