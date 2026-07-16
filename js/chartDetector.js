/*
=====================================
MASTERTRADE AI
Chart Detector
Versi 1.0
=====================================
*/

const ChartDetector = {

    chart: {

        detected: false,

        width: 0,

        height: 0,

        candles: 0,

        trend: "UNKNOWN",

        timeframe: "UNKNOWN"

    },

    detect(imageInfo){

        if(!imageInfo){

            return false;

        }

        this.chart.detected = true;

        this.chart.width = imageInfo.width || 0;

        this.chart.height = imageInfo.height || 0;

        this.chart.candles = 100;

        this.chart.trend = "BULLISH";

        this.chart.timeframe = "M15";

        return this.chart;

    },

    getChart(){

        return this.chart;

    },

    reset(){

        this.chart = {

            detected: false,

            width: 0,

            height: 0,

            candles: 0,

            trend: "UNKNOWN",

            timeframe: "UNKNOWN"

        };

    }

};

console.log("================================");
console.log("MASTERTRADE AI CHART DETECTOR");
console.log("================================");

console.log(

    ChartDetector.detect({

        width:1920,

        height:1080

    })

);
