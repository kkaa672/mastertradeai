/*
=====================================
MASTERTRADE AI
Momentum Engine
Versi 1.0
=====================================
*/

const MomentumEngine = {

    version: "1.0",

    momentum: "UNKNOWN",

    strength: 0,

    acceleration: 0,

    direction: "NONE",

    analyze(data){

        if(!data){

            this.momentum = "UNKNOWN";

            this.strength = 0;

            this.acceleration = 0;

            this.direction = "NONE";

        }else{

            this.momentum = "STRONG";

            this.strength = 92;

            this.acceleration = 87;

            this.direction = "BULLISH";

        }

        return{

            momentum:this.momentum,

            strength:this.strength,

            acceleration:this.acceleration,

            direction:this.direction

        };

    },

    getMomentum(){

        return{

            momentum:this.momentum,

            strength:this.strength,

            acceleration:this.acceleration,

            direction:this.direction

        };

    },

    reset(){

        this.momentum="UNKNOWN";

        this.strength=0;

        this.acceleration=0;

        this.direction="NONE";

    }

};

console.log("================================");
console.log("MASTERTRADE AI");
console.log("MOMENTUM ENGINE");
console.log("================================");

console.log(

    MomentumEngine.analyze(true)

);
