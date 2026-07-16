/*
=====================================
MASTERTRADE AI
Settings Manager
Versi 1.0
=====================================
*/

const SettingsManager = {

    settings: {

        pair: "XAUUSD",

        timeframe: "M15",

        risk: "LOW",

        capital: 100,

        language: "Indonesia",

        theme: "Dark",

        autoSave: true

    },

    getAll(){

        return this.settings;

    },

    get(key){

        return this.settings[key];

    },

    set(key,value){

        this.settings[key]=value;

        return true;

    },

    reset(){

        this.settings={

            pair:"XAUUSD",

            timeframe:"M15",

            risk:"LOW",

            capital:100,

            language:"Indonesia",

            theme:"Dark",

            autoSave:true

        };

    }

};

console.log("================================");

console.log("MASTERTRADE SETTINGS");

console.log("================================");

console.log(SettingsManager.getAll());

SettingsManager.set("pair","BTCUSD");

SettingsManager.set("risk","MEDIUM");

console.log(SettingsManager.getAll());
