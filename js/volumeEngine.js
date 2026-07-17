/*
=====================================
MASTERTRADE AI
Volume Engine
Versi 1.0
=====================================
*/

const VolumeEngine = {

    version: "1.0",

    volume: 0,

    averageVolume: 0,

    volumeStrength: "UNKNOWN",

    spike: false,

    analyze(data){

        if(!data){

            this.volume = 0;

            this.averageVolume = 0;

            this.volumeStrength = "UNKNOWN";

            this.spike = false;

        }else{

            this.volume = 1850;

            this.averageVolume = 1420;

            this.volumeStrength = "HIGH";

            this.spike = true;

        }

        return{

            volume: this.volume,

            averageVolume: this.averageVolume,

            volumeStrength: this.volumeStrength,

            spike: this.spike

        };

    },

    getVolume(){

        return{

            volume: this.volume,

            averageVolume: this.averageVolume,

            volumeStrength: this.volumeStrength,

            spike: this.spike

        };

    },

    reset(){

        this.volume = 0;

        this.averageVolume = 0;

        this.volumeStrength = "UNKNOWN";

        this.spike = false;

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("VOLUME ENGINE");
console.log("================================");

console.log(

    VolumeEngine.analyze(true)

);
