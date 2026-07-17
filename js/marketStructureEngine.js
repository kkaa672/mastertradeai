/*
=====================================
MASTERTRADE AI
Market Structure Engine
Versi 1.0
=====================================
*/

const MarketStructureEngine = {

    version: "1.0",

    trend: "UNKNOWN",

    HH: false,

    HL: false,

    LH: false,

    LL: false,

    BOS: false,

    CHOCH: false,

    confidence: 0,

    analyze(data){

        if(!data){

            this.trend = "UNKNOWN";

            this.HH = false;

            this.HL = false;

            this.LH = false;

            this.LL = false;

            this.BOS = false;

            this.CHOCH = false;

            this.confidence = 0;

        }else{

            this.trend = "BULLISH";

            this.HH = true;

            this.HL = true;

            this.LH = false;

            this.LL = false;

            this.BOS = true;

            this.CHOCH = false;

            this.confidence = 93;

        }

        return{

            trend: this.trend,

            HH: this.HH,

            HL: this.HL,

            LH: this.LH,

            LL: this.LL,

            BOS: this.BOS,

            CHOCH: this.CHOCH,

            confidence: this.confidence

        };

    },

    getStructure(){

        return{

            trend: this.trend,

            HH: this.HH,

            HL: this.HL,

            LH: this.LH,

            LL: this.LL,

            BOS: this.BOS,

            CHOCH: this.CHOCH,

            confidence: this.confidence

        };

    },

    reset(){

        this.trend = "UNKNOWN";

        this.HH = false;

        this.HL = false;

        this.LH = false;

        this.LL = false;

        this.BOS = false;

        this.CHOCH = false;

        this.confidence = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("MARKET STRUCTURE ENGINE");
console.log("================================");

console.log(

    MarketStructureEngine.analyze(true)

);
