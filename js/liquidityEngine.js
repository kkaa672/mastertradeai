/*
=====================================
MASTERTRADE AI
Liquidity Engine
Versi 1.0
=====================================
*/

const LiquidityEngine = {

    version: "1.0",

    liquidity: {

        buySide: false,

        sellSide: false,

        sweep: false,

        stopHunt: false,

        zone: "UNKNOWN",

        confidence: 0

    },

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.liquidity.buySide = true;

            this.liquidity.sellSide = false;

            this.liquidity.sweep = true;

            this.liquidity.stopHunt = false;

            this.liquidity.zone = "BUY SIDE";

            this.liquidity.confidence = 94;

        }

        return this.liquidity;

    },

    getLiquidity(){

        return this.liquidity;

    },

    reset(){

        this.liquidity = {

            buySide:false,

            sellSide:false,

            sweep:false,

            stopHunt:false,

            zone:"UNKNOWN",

            confidence:0

        };

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("LIQUIDITY ENGINE");
console.log("================================");

console.log(

    LiquidityEngine.analyze(true)

);
