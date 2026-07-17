/*
=====================================
MASTERTRADE AI
Session Engine
Versi 1.0
=====================================
*/

const SessionEngine = {

    version: "1.0",

    currentSession: "UNKNOWN",

    londonOpen: false,

    newYorkOpen: false,

    tokyoOpen: false,

    sydneyOpen: false,

    overlap: "NONE",

    tradingCondition: "UNKNOWN",

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.currentSession = "LONDON";

            this.londonOpen = true;

            this.newYorkOpen = false;

            this.tokyoOpen = false;

            this.sydneyOpen = false;

            this.overlap = "NONE";

            this.tradingCondition = "GOOD";

        }

        return {

            currentSession: this.currentSession,

            londonOpen: this.londonOpen,

            newYorkOpen: this.newYorkOpen,

            tokyoOpen: this.tokyoOpen,

            sydneyOpen: this.sydneyOpen,

            overlap: this.overlap,

            tradingCondition: this.tradingCondition

        };

    },

    getSession(){

        return {

            currentSession: this.currentSession,

            londonOpen: this.londonOpen,

            newYorkOpen: this.newYorkOpen,

            tokyoOpen: this.tokyoOpen,

            sydneyOpen: this.sydneyOpen,

            overlap: this.overlap,

            tradingCondition: this.tradingCondition

        };

    },

    reset(){

        this.currentSession = "UNKNOWN";

        this.londonOpen = false;

        this.newYorkOpen = false;

        this.tokyoOpen = false;

        this.sydneyOpen = false;

        this.overlap = "NONE";

        this.tradingCondition = "UNKNOWN";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("SESSION ENGINE");
console.log("================================");

console.log(

    SessionEngine.analyze(true)

);
