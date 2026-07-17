/*
=====================================
MASTERTRADE AI
Stop Loss Engine
Versi 1.0
=====================================
*/

const StopLossEngine = {

    version: "1.0",

    entryPrice: 0,

    stopLoss: 0,

    direction: "NONE",

    method: "STRUCTURE",

    distance: 0,

    valid: false,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.entryPrice = 3330.00;

            this.direction = "BUY";

            this.method = "SWING LOW";

            this.stopLoss = 3320.00;

            this.distance = 10.00;

            this.valid = true;

        }

        return{

            entryPrice: this.entryPrice,

            stopLoss: this.stopLoss,

            direction: this.direction,

            method: this.method,

            distance: this.distance,

            valid: this.valid

        };

    },

    getStopLoss(){

        return{

            entryPrice: this.entryPrice,

            stopLoss: this.stopLoss,

            direction: this.direction,

            method: this.method,

            distance: this.distance,

            valid: this.valid

        };

    },

    reset(){

        this.entryPrice = 0;

        this.stopLoss = 0;

        this.direction = "NONE";

        this.method = "STRUCTURE";

        this.distance = 0;

        this.valid = false;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("STOP LOSS ENGINE");
console.log("================================");

console.log(

    StopLossEngine.analyze(true)

);
