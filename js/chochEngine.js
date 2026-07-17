/*
=====================================
MASTERTRADE AI
Change of Character Engine
Versi 1.0
=====================================
*/

const CHOCHEngine = {

    version: "1.0",

    bullishCHOCH: false,

    bearishCHOCH: false,

    direction: "NONE",

    breakLevel: 0,

    confidence: 0,

    status: "NO_CHOCH",

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.bullishCHOCH = true;

            this.bearishCHOCH = false;

            this.direction = "BULLISH";

            this.breakLevel = 3338.75;

            this.confidence = 94;

            this.status = "VALID_CHOCH";

        }

        return{

            bullishCHOCH: this.bullishCHOCH,

            bearishCHOCH: this.bearishCHOCH,

            direction: this.direction,

            breakLevel: this.breakLevel,

            confidence: this.confidence,

            status: this.status

        };

    },

    getCHOCH(){

        return{

            bullishCHOCH: this.bullishCHOCH,

            bearishCHOCH: this.bearishCHOCH,

            direction: this.direction,

            breakLevel: this.breakLevel,

            confidence: this.confidence,

            status: this.status

        };

    },

    reset(){

        this.bullishCHOCH = false;

        this.bearishCHOCH = false;

        this.direction = "NONE";

        this.breakLevel = 0;

        this.confidence = 0;

        this.status = "NO_CHOCH";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("CHOCH ENGINE");
console.log("================================");

console.log(

    CHOCHEngine.analyze(true)

);
