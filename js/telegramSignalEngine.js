/*
=====================================
MASTERTRADE AI
Telegram Signal Engine
Versi 1.0
=====================================
*/

const TelegramSignalEngine = {

    version: "1.0",

    enabled: false,

    botToken: "",

    chatId: "",

    signal: "NO TRADE",

    pair: "XAUUSD",

    timeframe: "M5",

    entry: 0,

    stopLoss: 0,

    takeProfit1: 0,

    takeProfit2: 0,

    takeProfit3: 0,

    confidence: 0,

    message: "",

    analyze(data){

        if(!data){

            this.reset();

        }else{

            this.enabled = true;

            this.signal = "BUY";

            this.pair = "XAUUSD";

            this.timeframe = "M5";

            this.entry = 3330.00;

            this.stopLoss = 3320.00;

            this.takeProfit1 = 3340.00;

            this.takeProfit2 = 3350.00;

            this.takeProfit3 = 3360.00;

            this.confidence = 94;

            this.message =
`MASTERTRADE AI SIGNAL

PAIR : ${this.pair}
TIMEFRAME : ${this.timeframe}

SIGNAL : ${this.signal}

ENTRY : ${this.entry}

STOP LOSS : ${this.stopLoss}

TP1 : ${this.takeProfit1}

TP2 : ${this.takeProfit2}

TP3 : ${this.takeProfit3}

CONFIDENCE : ${this.confidence}%`;

        }

        return{

            enabled: this.enabled,

            signal: this.signal,

            message: this.message

        };

    },

    getSignal(){

        return{

            enabled: this.enabled,

            signal: this.signal,

            message: this.message

        };

    },

    reset(){

        this.enabled = false;

        this.botToken = "";

        this.chatId = "";

        this.signal = "NO TRADE";

        this.pair = "";

        this.timeframe = "";

        this.entry = 0;

        this.stopLoss = 0;

        this.takeProfit1 = 0;

        this.takeProfit2 = 0;

        this.takeProfit3 = 0;

        this.confidence = 0;

        this.message = "";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("TELEGRAM SIGNAL ENGINE");
console.log("================================");

console.log(

    TelegramSignalEngine.analyze(true)

);
