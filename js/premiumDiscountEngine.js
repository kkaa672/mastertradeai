/*
=====================================
MASTERTRADE AI
Premium & Discount Engine
Versi 1.0
=====================================
*/

const PremiumDiscountEngine = {

    version: "1.0",

    zone: "EQUILIBRIUM",

    premium: false,

    discount: false,

    equilibrium: true,

    currentPrice: 0,

    equilibriumPrice: 0,

    confidence: 0,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.currentPrice = 3332.50;

            this.equilibriumPrice = 3325.00;

            this.zone = "PREMIUM";

            this.premium = true;

            this.discount = false;

            this.equilibrium = false;

            this.confidence = 91;

        }

        return{

            zone: this.zone,

            premium: this.premium,

            discount: this.discount,

            equilibrium: this.equilibrium,

            currentPrice: this.currentPrice,

            equilibriumPrice: this.equilibriumPrice,

            confidence: this.confidence

        };

    },

    getResult(){

        return{

            zone: this.zone,

            premium: this.premium,

            discount: this.discount,

            equilibrium: this.equilibrium,

            currentPrice: this.currentPrice,

            equilibriumPrice: this.equilibriumPrice,

            confidence: this.confidence

        };

    },

    reset(){

        this.zone = "EQUILIBRIUM";

        this.premium = false;

        this.discount = false;

        this.equilibrium = true;

        this.currentPrice = 0;

        this.equilibriumPrice = 0;

        this.confidence = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("PREMIUM DISCOUNT ENGINE");
console.log("================================");

console.log(

    PremiumDiscountEngine.analyze(true)

);
