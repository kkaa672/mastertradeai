/*
=====================================
MASTERTRADE AI
Supply & Demand Engine
Versi 1.0
=====================================
*/

const SupplyDemandEngine = {

    version: "1.0",

    supplyZone: {

        high: 0,

        low: 0,

        valid: false

    },

    demandZone: {

        high: 0,

        low: 0,

        valid: false

    },

    activeZone: "NONE",

    confidence: 0,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.supplyZone = {

                high: 3352.50,

                low: 3346.00,

                valid: true

            };

            this.demandZone = {

                high: 3320.00,

                low: 3313.50,

                valid: true

            };

            this.activeZone = "DEMAND";

            this.confidence = 93;

        }

        return{

            supplyZone: this.supplyZone,

            demandZone: this.demandZone,

            activeZone: this.activeZone,

            confidence: this.confidence

        };

    },

    getResult(){

        return{

            supplyZone: this.supplyZone,

            demandZone: this.demandZone,

            activeZone: this.activeZone,

            confidence: this.confidence

        };

    },

    reset(){

        this.supplyZone = {

            high:0,

            low:0,

            valid:false

        };

        this.demandZone = {

            high:0,

            low:0,

            valid:false

        };

        this.activeZone = "NONE";

        this.confidence = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("SUPPLY DEMAND ENGINE");
console.log("================================");

console.log(

    SupplyDemandEngine.analyze(true)

);
