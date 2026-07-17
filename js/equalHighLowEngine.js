/*
=====================================
MASTERTRADE AI
Equal High & Equal Low Engine
Versi 1.0
=====================================
*/

const EqualHighLowEngine = {

    version: "1.0",

    equalHigh: false,

    equalLow: false,

    highLevel: 0,

    lowLevel: 0,

    liquidityTarget: "NONE",

    confidence: 0,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.equalHigh = true;

            this.equalLow = false;

            this.highLevel = 3345.25;

            this.lowLevel = 0;

            this.liquidityTarget = "BUY SIDE";

            this.confidence = 92;

        }

        return{

            equalHigh: this.equalHigh,

            equalLow: this.equalLow,

            highLevel: this.highLevel,

            lowLevel: this.lowLevel,

            liquidityTarget: this.liquidityTarget,

            confidence: this.confidence

        };

    },

    getResult(){

        return{

            equalHigh: this.equalHigh,

            equalLow: this.equalLow,

            highLevel: this.highLevel,

            lowLevel: this.lowLevel,

            liquidityTarget: this.liquidityTarget,

            confidence: this.confidence

        };

    },

    reset(){

        this.equalHigh = false;

        this.equalLow = false;

        this.highLevel = 0;

        this.lowLevel = 0;

        this.liquidityTarget = "NONE";

        this.confidence = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("EQUAL HIGH LOW ENGINE");
console.log("================================");

console.log(

    EqualHighLowEngine.analyze(true)

);
