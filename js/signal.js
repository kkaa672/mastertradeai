/*
=====================================
MASTERTRADE AI
Signal Manager
Versi 1.0
=====================================
*/

const SignalManager = {

    signals: [],

    addSignal(pair, signal, confidence, entry, stopLoss, takeProfit){

        const data = {

            id: Date.now(),

            time: new Date().toLocaleString(),

            pair: pair,

            signal: signal,

            confidence: confidence,

            entry: entry,

            stopLoss: stopLoss,

            takeProfit: takeProfit

        };

        this.signals.push(data);

        return data;

    },

    getSignals(){

        return this.signals;

    },

    getLastSignal(){

        if(this.signals.length === 0){

            return null;

        }

        return this.signals[this.signals.length - 1];

    },

    clearSignals(){

        this.signals = [];

    }

};

console.log("Signal Manager Loaded");

SignalManager.addSignal(

    "XAUUSD",

    "BUY",

    90,

    "3350.00",

    "3345.00",

    "3360.00"

);

console.log(SignalManager.getSignals());
