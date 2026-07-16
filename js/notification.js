/*
=====================================
MASTERTRADE AI
Notification Manager
Versi 1.0
=====================================
*/

const NotificationManager = {

    notifications: [],

    add(title,message,type="INFO"){

        const data={

            id:Date.now(),

            time:new Date().toLocaleString(),

            title:title,

            message:message,

            type:type

        };

        this.notifications.push(data);

        return data;

    },

    getAll(){

        return this.notifications;

    },

    getLast(){

        if(this.notifications.length===0){

            return null;

        }

        return this.notifications[this.notifications.length-1];

    },

    total(){

        return this.notifications.length;

    },

    clear(){

        this.notifications=[];

    }

};

NotificationManager.add(

    "System",

    "MASTERTRADE AI berhasil dijalankan.",

    "SUCCESS"

);

NotificationManager.add(

    "Analysis",

    "Engine siap digunakan.",

    "INFO"

);

console.log("================================");

console.log("MASTERTRADE AI NOTIFICATION");

console.log("================================");

console.log(NotificationManager.getAll());
