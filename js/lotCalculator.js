/*
=====================================
MASTERTRADE AI
Lot Calculator
Versi 1.0
=====================================
*/

const LotCalculator = {

    version: "1.0",

    accountBalance: 0,

    riskPercent: 1,

    stopLossPips: 0,

    pipValue: 1,

    lotSize: 0,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.accountBalance = 1000;

            this.riskPercent = 1;

            this.stopLossPips = 100;

            this.pipValue = 1;

            const riskMoney =
                this.accountBalance * (this.riskPercent / 100);

            this.lotSize =
                Number((riskMoney / (this.stopLossPips * this.pipValue)).toFixed(2));

        }

        return{

            accountBalance: this.accountBalance,

            riskPercent: this.riskPercent,

            stopLossPips: this.stopLossPips,

            pipValue: this.pipValue,

            lotSize: this.lotSize

        };

    },

    getLot(){

        return{

            accountBalance: this.accountBalance,

            riskPercent: this.riskPercent,

            stopLossPips: this.stopLossPips,

            pipValue: this.pipValue,

            lotSize: this.lotSize

        };

    },

    reset(){

        this.accountBalance = 0;

        this.riskPercent = 1;

        this.stopLossPips = 0;

        this.pipValue = 1;

        this.lotSize = 0;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("LOT CALCULATOR");
console.log("================================");

console.log(

    LotCalculator.analyze(true)

);
