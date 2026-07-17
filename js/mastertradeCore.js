/*
=====================================
MASTERTRADE AI
MASTER CORE ENGINE
Versi 1.0
=====================================
*/

const MastertradeCore = {

    version: "1.0",

    initialized: false,

    modules: {

        trendEngine: false,

        momentumEngine: false,

        volumeEngine: false,

        breakoutEngine: false,

        volatilityEngine: false,

        swingEngine: false,

        marketStructureEngine: false,

        liquidityEngine: false,

        orderBlockEngine: false,

        fairValueGapEngine: false,

        bosEngine: false,

        chochEngine: false,

        equalHighLowEngine: false,

        premiumDiscountEngine: false,

        supplyDemandEngine: false,

        sessionEngine: false,

        newsFilterEngine: false,

        confidenceEngine: false,

        riskManager: false,

        lotCalculator: false,

        takeProfitEngine: false,

        stopLossEngine: false,

        trailingStopEngine: false,

        tradeManager: false,

        telegramSignalEngine: false,

        backtestEngine: false,

        optimizerEngine: false

    },

    initialize(){

        Object.keys(this.modules).forEach(module => {

            this.modules[module] = true;

        });

        this.initialized = true;

        return this.getStatus();

    },

    getStatus(){

        return {

            initialized: this.initialized,

            version: this.version,

            modules: this.modules

        };

    },

    reset(){

        Object.keys(this.modules).forEach(module => {

            this.modules[module] = false;

        });

        this.initialized = false;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("MASTER CORE ENGINE");
console.log("================================");

console.log(

    MastertradeCore.initialize()

);
