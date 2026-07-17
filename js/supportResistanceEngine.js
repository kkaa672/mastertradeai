/*
=====================================
MASTERTRADE AI
Support & Resistance Engine
Versi 1.0
=====================================
*/

const SupportResistanceEngine = {

    version: "1.0",

    support: [],

    resistance: [],

    breakout: false,

    rejection: false,

    analyze(data){

        this.support = [

            3300.00,

            3285.50,

            3270.00

        ];

        this.resistance = [

            3325.00,

            3340.50,

            3360.00

        ];

        this.breakout = false;

        this.rejection = true;

        return {

            support: this.support,

            resistance: this.resistance,

            breakout: this.breakout,

            rejection: this.rejection

        };

    },

    getSupport(){

        return this.support;

    },

    getResistance(){

        return this.resistance;

    },

    reset(){

        this.support = [];

        this.resistance = [];

        this.breakout = false;

        this.rejection = false;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("SUPPORT & RESISTANCE ENGINE");
console.log("================================");

console.log(

    SupportResistanceEngine.analyze(true)

);
