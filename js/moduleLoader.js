/*
=====================================
MASTERTRADE AI
Module Loader
Versi 1.0
=====================================
*/

const ModuleLoader = {

    version: "1.0",

    loadedModules: [],

    failedModules: [],

    status: "NOT_LOADED",

    load(){

        this.loadedModules = [

            "TrendEngine",
            "MomentumEngine",
            "VolumeEngine",
            "BreakoutEngine",
            "VolatilityEngine",
            "SwingEngine",
            "MarketStructureEngine",
            "LiquidityEngine",
            "OrderBlockEngine",
            "FairValueGapEngine",
            "BOSEngine",
            "CHOCHEngine",
            "EqualHighLowEngine",
            "PremiumDiscountEngine",
            "SupplyDemandEngine",
            "SessionEngine",
            "NewsFilterEngine",
            "ConfidenceEngine",
            "RiskManager",
            "LotCalculator",
            "TakeProfitEngine",
            "StopLossEngine",
            "TrailingStopEngine",
            "TradeManager",
            "TelegramSignalEngine",
            "BacktestEngine",
            "OptimizerEngine"

        ];

        this.failedModules = [];

        this.status = "READY";

        return this.getStatus();

    },

    getStatus(){

        return {

            version: this.version,

            status: this.status,

            loaded: this.loadedModules.length,

            failed: this.failedModules.length,

            loadedModules: this.loadedModules,

            failedModules: this.failedModules

        };

    },

    reset(){

        this.loadedModules = [];

        this.failedModules = [];

        this.status = "NOT_LOADED";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("MODULE LOADER");
console.log("================================");

console.log(

    ModuleLoader.load()

);
