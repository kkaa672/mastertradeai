/*
=====================================
MASTERTRADE AI
Risk Manager
Versi 1.0
=====================================
*/

const RiskManager = {

    version: "1.0",

    accountBalance: 0,

    riskPercent: 1,

    maxDrawdown: 10,

    maxLot: 1.00,

    stopLoss: 0,

    takeProfit: 0,

    riskReward: "1:2",

    allowTrade: false,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.accountBalance = 1000;

            this.riskPercent = 1;

            this.maxDrawdown = 10;

            this.maxLot = 0.10;

            this.stopLoss = 100;

            this.takeProfit = 200;

            this.riskReward = "1:2";

            this.allowTrade = true;

        }

        return{

            accountBalance: this.accountBalance,

            riskPercent: this.riskPercent,

            maxDrawdown: this.maxDrawdown,

            maxLot: this.maxLot,

            stopLoss: this.stopLoss,

            takeProfit: this.takeProfit,

            riskReward: this.riskReward,

            allowTrade: this.allowTrade

        };

    },

    getRisk(){

        return{

            accountBalance: this.accountBalance,

            riskPercent: this.riskPercent,

            maxDrawdown: this.maxDrawdown,

            maxLot: this.maxLot,

            stopLoss: this.stopLoss,

            takeProfit: this.takeProfit,

            riskReward: this.riskReward,

            allowTrade: this.allowTrade

        };

    },

    reset(){

        this.accountBalance = 0;

        this.riskPercent = 1;

        this.maxDrawdown = 10;

        this.maxLot = 1.00;

        this.stopLoss = 0;

        this.takeProfit = 0;

        this.riskReward = "1:2";

        this.allowTrade = false;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("RISK MANAGER");
console.log("================================");

console.log(

    RiskManager.analyze(true)

);
