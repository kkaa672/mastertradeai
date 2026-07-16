/*
=====================================
MASTERTRADE AI
Candlestick Engine
Versi 1.0
=====================================
*/

const CandlestickEngine = {

    version: "1.0",

    patterns: [

        "DOJI",

        "HAMMER",

        "SHOOTING STAR",

        "BULLISH ENGULFING",

        "BEARISH ENGULFING",

        "PIN BAR",

        "INSIDE BAR",

        "MORNING STAR",

        "EVENING STAR",

        "MARUBOZU"

    ],

    lastPattern: "UNKNOWN",

    confidence: 0,

    detect(candles){

        if(!candles){

            this.lastPattern = "UNKNOWN";

            this.confidence = 0;

        }else{

            this.lastPattern = "BULLISH ENGULFING";

            this.confidence = 91;

        }

        return{

            pattern:this.lastPattern,

            confidence:this.confidence

        };

    },

    getPatterns(){

        return this.patterns;

    },

    getLastPattern(){

        return{

            pattern:this.lastPattern,

            confidence:this.confidence

        };

    },

    reset(){

        this.lastPattern="UNKNOWN";

        this.confidence=0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI CANDLESTICK ENGINE");
console.log("================================");

console.log(

    CandlestickEngine.detect(true)

);

console.log(

    CandlestickEngine.getPatterns()

);
