/*
====================================
MASTERTRADE AI
Main JavaScript
Versi 1.0
====================================
*/

const MasterTradeAI = {

    version: "1.0",

    status: "READY",

    author: "MASTERTRADE AI",

    start: function(){

        console.log("MASTERTRADE AI BERHASIL DIMULAI");

    },

    info: function(){

        return {

            version: this.version,

            status: this.status,

            author: this.author

        };

    }

};

MasterTradeAI.start();

console.log(MasterTradeAI.info());
