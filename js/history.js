/*
=====================================
MASTERTRADE AI
History Manager
Versi 1.0
=====================================
*/

const HistoryManager = {

    history: [],

    add(data){

        this.history.push({

            id: Date.now(),

            time: new Date().toLocaleString(),

            data: data

        });

    },

    getAll(){

        return this.history;

    },

    getLast(){

        if(this.history.length === 0){

            return null;

        }

        return this.history[this.history.length - 1];

    },

    count(){

        return this.history.length;

    },

    clear(){

        this.history = [];

    }

};

HistoryManager.add({

    pair:"XAUUSD",

    signal:"BUY",

    confidence:90

});

console.log("History Manager Loaded");

console.log(HistoryManager.getAll());

console.log("Jumlah History :",HistoryManager.count());
