/*
=====================================
MASTERTRADE AI
Trend Engine
Versi 1.0
=====================================
*/

const TrendEngine = {

    version: "1.0",

    trend: "UNKNOWN",

    strength: 0,

    structure: {

        HH: false,

        HL: false,

        LH: false,

        LL: false

    },

    analyze(data){

        if(!data){

            this.trend = "UNKNOWN";

            this.strength = 0;

        }else{

            this.trend = "BULLISH";

            this.strength = 88;

            this.structure.HH = true;

            this.structure.HL = true;

            this.structure.LH = false;

            this.structure.LL = false;

        }

        return {

            trend: this.trend,

            strength: this.strength,

            structure: this.structure

        };

    },

    getTrend(){

        return {

            trend: this.trend,

            strength: this.strength,

            structure: this.structure

        };

    },

    reset(){

        this.trend = "UNKNOWN";

        this.strength = 0;

        this.structure = {

            HH:false,

            HL:false,

            LH:false,

            LL:false

        };

    }

};

console.log("================================");
console.log("MASTERTRADE AI TREND ENGINE");
console.log("================================");

console.log(

    TrendEngine.analyze(true)

);
