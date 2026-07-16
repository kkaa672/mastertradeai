/*
=====================================
MASTERTRADE AI
Report Manager
Versi 1.0
=====================================
*/

const ReportManager = {

    reports: [],

    create(pair, signal, confidence){

        const report = {

            id: Date.now(),

            date: new Date().toLocaleString(),

            pair: pair,

            signal: signal,

            confidence: confidence

        };

        this.reports.push(report);

        return report;

    },

    getAll(){

        return this.reports;

    },

    getLast(){

        if(this.reports.length === 0){

            return null;

        }

        return this.reports[this.reports.length - 1];

    },

    total(){

        return this.reports.length;

    },

    clear(){

        this.reports = [];

    }

};

ReportManager.create("XAUUSD","BUY",90);

ReportManager.create("EURUSD","SELL",87);

console.log("================================");

console.log("MASTERTRADE REPORT MANAGER");

console.log("================================");

console.log("Jumlah Report :",ReportManager.total());

console.log(ReportManager.getAll());
