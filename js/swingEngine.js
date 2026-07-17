/*
=====================================
MASTERTRADE AI
Swing Engine
Versi 1.0
=====================================
*/

const SwingEngine = {

    version: "1.0",

    swingHigh: 0,

    swingLow: 0,

    direction: "UNKNOWN",

    strength: 0,

    lastSwing: "NONE",

    analyze(data){

        if(!data){

            this.swingHigh = 0;

            this.swingLow = 0;

            this.direction = "UNKNOWN";

            this.strength = 0;

            this.lastSwing = "NONE";

        }else{

            this.swingHigh = 3348.50;

            this.swingLow = 3312.75;

            this.direction = "UPTREND";

            this.strength = 90;

            this.lastSwing = "HIGH";

        }

        return{

            swingHigh:this.swingHigh,

            swingLow:this.swingLow,

            direction:this.direction,

            strength:this.strength,

            lastSwing:this.lastSwing

        };

    },

    getSwing(){

        return{

            swingHigh:this.swingHigh,

            swingLow:this.swingLow,

            direction:this.direction,

            strength:this.strength,

            lastSwing:this.lastSwing

        };

    },

    reset(){

        this.swingHigh = 0;

        this.swingLow = 0;

        this.direction = "UNKNOWN";

        this.strength = 0;

        this.lastSwing = "NONE";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("SWING ENGINE");
console.log("================================");

console.log(

    SwingEngine.analyze(true)

);
