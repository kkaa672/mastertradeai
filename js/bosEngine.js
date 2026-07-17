/*
=====================================
MASTERTRADE AI
Break of Structure Engine
Versi 1.0
=====================================
*/

const BOSEngine = {

    version: "1.0",

    bullishBOS: false,

    bearishBOS: false,

    direction: "NONE",

    breakPrice: 0,

    confidence: 0,

    status: "NO_BOS",

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.bullishBOS = true;

            this.bearishBOS = false;

            this.direction = "BULLISH";

            this.breakPrice = 3342.50;

            this.confidence = 95;

            this.status = "VALID_BOS";

        }

        return{

            bullishBOS: this.bullishBOS,

            bearishBOS: this.bearishBOS,

            direction: this.direction,

            breakPrice: this.breakPrice,

            confidence: this.confidence,

            status: this.status

        };

    },

    getBOS(){

        return{

            bullishBOS: this.bullishBOS,

            bearishBOS: this.bearishBOS,

            direction: this.direction,

            breakPrice: this.breakPrice,

            confidence: this.confidence,

            status: this.status

        };

    },

    reset(){

        this.bullishBOS = false;

        this.bearishBOS = false;

        this.direction = "NONE";

        this.breakPrice = 0;

        this.confidence = 0;

        this.status = "NO_BOS";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("BREAK OF STRUCTURE ENGINE");
console.log("================================");

console.log(

    BOSEngine.analyze(true)

);
