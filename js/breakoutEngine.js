/*
=====================================
MASTERTRADE AI
Breakout Engine
Versi 1.0
=====================================
*/

const BreakoutEngine = {

    version: "1.0",

    breakout: false,

    type: "NONE",

    confidence: 0,

    retest: false,

    level: 0,

    analyze(data){

        if(!data){

            this.breakout = false;

            this.type = "NONE";

            this.confidence = 0;

            this.retest = false;

            this.level = 0;

        }else{

            this.breakout = true;

            this.type = "BULLISH";

            this.confidence = 91;

            this.retest = true;

            this.level = 3325.50;

        }

        return{

            breakout:this.breakout,

            type:this.type,

            confidence:this.confidence,

            retest:this.retest,

            level:this.level

        };

    },

    getBreakout(){

        return{

            breakout:this.breakout,

            type:this.type,

            confidence:this.confidence,

            retest:this.retest,

            level:this.level

        };

    },

    reset(){

        this.breakout = false;

        this.type = "NONE";

        this.confidence = 0;

        this.retest = false;

        this.level = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("BREAKOUT ENGINE");
console.log("================================");

console.log(

    BreakoutEngine.analyze(true)

);
