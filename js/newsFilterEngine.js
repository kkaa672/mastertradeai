/*
=====================================
MASTERTRADE AI
News Filter Engine
Versi 1.0
=====================================
*/

const NewsFilterEngine = {

    version: "1.0",

    enabled: true,

    impact: "LOW",

    event: "NONE",

    currency: "NONE",

    minutesToNews: 0,

    allowTrading: true,

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.impact = "HIGH";

            this.event = "FOMC Interest Rate Decision";

            this.currency = "USD";

            this.minutesToNews = 25;

            this.allowTrading = false;

        }

        return{

            enabled: this.enabled,

            impact: this.impact,

            event: this.event,

            currency: this.currency,

            minutesToNews: this.minutesToNews,

            allowTrading: this.allowTrading

        };

    },

    getNews(){

        return{

            enabled: this.enabled,

            impact: this.impact,

            event: this.event,

            currency: this.currency,

            minutesToNews: this.minutesToNews,

            allowTrading: this.allowTrading

        };

    },

    reset(){

        this.enabled = true;

        this.impact = "LOW";

        this.event = "NONE";

        this.currency = "NONE";

        this.minutesToNews = 0;

        this.allowTrading = true;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("NEWS FILTER ENGINE");
console.log("================================");

console.log(

    NewsFilterEngine.analyze(true)

);
