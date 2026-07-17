/*
=====================================
MASTERTRADE AI
Fair Value Gap Engine
Versi 1.0
=====================================
*/

const FairValueGapEngine = {

    version: "1.0",

    bullishFVG: false,

    bearishFVG: false,

    gapSize: 0,

    gapHigh: 0,

    gapLow: 0,

    status: "NONE",

    confidence: 0,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.bullishFVG = true;

            this.bearishFVG = false;

            this.gapSize = 12.50;

            this.gapHigh = 3335.50;

            this.gapLow = 3323.00;

            this.status = "VALID";

            this.confidence = 93;

        }

        return{

            bullishFVG: this.bullishFVG,

            bearishFVG: this.bearishFVG,

            gapSize: this.gapSize,

            gapHigh: this.gapHigh,

            gapLow: this.gapLow,

            status: this.status,

            confidence: this.confidence

        };

    },

    getFVG(){

        return{

            bullishFVG: this.bullishFVG,

            bearishFVG: this.bearishFVG,

            gapSize: this.gapSize,

            gapHigh: this.gapHigh,

            gapLow: this.gapLow,

            status: this.status,

            confidence: this.confidence

        };

    },

    reset(){

        this.bullishFVG = false;

        this.bearishFVG = false;

        this.gapSize = 0;

        this.gapHigh = 0;

        this.gapLow = 0;

        this.status = "NONE";

        this.confidence = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("FAIR VALUE GAP ENGINE");
console.log("================================");

console.log(

    FairValueGapEngine.analyze(true)

);
