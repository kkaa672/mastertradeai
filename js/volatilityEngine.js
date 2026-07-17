/*
=====================================
MASTERTRADE AI
Volatility Engine
Versi 1.0
=====================================
*/

const VolatilityEngine = {

    version: "1.0",

    volatility: "UNKNOWN",

    score: 0,

    range: 0,

    marketState: "UNKNOWN",

    analyze(data){

        if(!data){

            this.volatility = "UNKNOWN";

            this.score = 0;

            this.range = 0;

            this.marketState = "UNKNOWN";

        }else{

            this.volatility = "HIGH";

            this.score = 89;

            this.range = 42.5;

            this.marketState = "ACTIVE";

        }

        return{

            volatility: this.volatility,

            score: this.score,

            range: this.range,

            marketState: this.marketState

        };

    },

    getStatus(){

        return{

            volatility: this.volatility,

            score: this.score,

            range: this.range,

            marketState: this.marketState

        };

    },

    reset(){

        this.volatility = "UNKNOWN";

        this.score = 0;

        this.range = 0;

        this.marketState = "UNKNOWN";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("VOLATILITY ENGINE");
console.log("================================");

console.log(

    VolatilityEngine.analyze(true)

);
