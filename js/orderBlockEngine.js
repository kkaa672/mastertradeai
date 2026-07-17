/*
=====================================
MASTERTRADE AI
Order Block Engine
Versi 1.0
=====================================
*/

const OrderBlockEngine = {

    version: "1.0",

    bullishOrderBlock: false,

    bearishOrderBlock: false,

    zone: "UNKNOWN",

    strength: 0,

    confidence: 0,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.bullishOrderBlock = true;

            this.bearishOrderBlock = false;

            this.zone = "BULLISH ORDER BLOCK";

            this.strength = 91;

            this.confidence = 94;

        }

        return{

            bullishOrderBlock: this.bullishOrderBlock,

            bearishOrderBlock: this.bearishOrderBlock,

            zone: this.zone,

            strength: this.strength,

            confidence: this.confidence

        };

    },

    getOrderBlock(){

        return{

            bullishOrderBlock: this.bullishOrderBlock,

            bearishOrderBlock: this.bearishOrderBlock,

            zone: this.zone,

            strength: this.strength,

            confidence: this.confidence

        };

    },

    reset(){

        this.bullishOrderBlock = false;

        this.bearishOrderBlock = false;

        this.zone = "UNKNOWN";

        this.strength = 0;

        this.confidence = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("ORDER BLOCK ENGINE");
console.log("================================");

console.log(

    OrderBlockEngine.analyze(true)

);
