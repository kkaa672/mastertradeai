/*
=====================================
MASTERTRADE AI
Logger Manager
Versi 1.0
=====================================
*/

const LoggerManager = {

    logs: [],

    add(level, message){

        const log = {

            id: Date.now(),

            time: new Date().toLocaleString(),

            level: level,

            message: message

        };

        this.logs.push(log);

        return log;

    },

    info(message){

        return this.add("INFO", message);

    },

    warning(message){

        return this.add("WARNING", message);

    },

    error(message){

        return this.add("ERROR", message);

    },

    getAll(){

        return this.logs;

    },

    getLast(){

        if(this.logs.length===0){

            return null;

        }

        return this.logs[this.logs.length-1];

    },

    clear(){

        this.logs=[];

    }

};

LoggerManager.info("MASTERTRADE AI dimulai.");

LoggerManager.warning("Belum ada chart yang diunggah.");

LoggerManager.error("Contoh log error.");

console.log("================================");
console.log("MASTERTRADE AI LOGGER");
console.log("================================");
console.log(LoggerManager.getAll());
