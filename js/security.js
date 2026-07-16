/*
=====================================
MASTERTRADE AI
Security Manager
Versi 1.0
=====================================
*/

const SecurityManager = {

    allowedExtensions: [

        "jpg",
        "jpeg",
        "png",
        "webp"

    ],

    maxFileSize: 10 * 1024 * 1024,

    validateExtension(fileName){

        const extension = fileName
            .split(".")
            .pop()
            .toLowerCase();

        return this.allowedExtensions.includes(extension);

    },

    validateSize(fileSize){

        return fileSize <= this.maxFileSize;

    },

    validate(fileName,fileSize){

        return {

            extension: this.validateExtension(fileName),

            size: this.validateSize(fileSize),

            valid:

                this.validateExtension(fileName) &&

                this.validateSize(fileSize)

        };

    }

};

console.log("================================");

console.log("MASTERTRADE AI SECURITY");

console.log("================================");

console.log(

    SecurityManager.validate(

        "chart.png",

        1024000

    )

);
