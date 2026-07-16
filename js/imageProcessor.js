/*
=====================================
MASTERTRADE AI
Image Processor
Versi 1.0
=====================================
*/

const ImageProcessor = {

    image: null,

    info: {

        name: "",

        width: 0,

        height: 0,

        size: 0,

        type: ""

    },

    load(file){

        if(!file){

            return false;

        }

        this.image = file;

        this.info.name = file.name;

        this.info.size = file.size;

        this.info.type = file.type;

        return true;

    },

    setResolution(width,height){

        this.info.width = width;

        this.info.height = height;

    },

    getInfo(){

        return this.info;

    },

    clear(){

        this.image = null;

        this.info = {

            name: "",

            width: 0,

            height: 0,

            size: 0,

            type: ""

        };

    }

};

console.log("================================");
console.log("MASTERTRADE AI IMAGE PROCESSOR");
console.log("================================");
console.log(ImageProcessor.getInfo());
