/*
=====================================
MASTERTRADE AI
Storage Manager
Versi 1.0
=====================================
*/

const StorageManager = {

    prefix: "MASTERTRADE_AI_",

    save(key, value){

        try{

            localStorage.setItem(

                this.prefix + key,

                JSON.stringify(value)

            );

            return true;

        }

        catch(error){

            console.log(error);

            return false;

        }

    },

    load(key){

        try{

            const data = localStorage.getItem(

                this.prefix + key

            );

            if(data===null){

                return null;

            }

            return JSON.parse(data);

        }

        catch(error){

            console.log(error);

            return null;

        }

    },

    remove(key){

        localStorage.removeItem(

            this.prefix + key

        );

    },

    clear(){

        Object.keys(localStorage).forEach(key=>{

            if(key.startsWith(this.prefix)){

                localStorage.removeItem(key);

            }

        });

    }

};

StorageManager.save(

    "user",

    {

        name:"MASTERTRADE",

        version:"1.0"

    }

);

console.log(

    StorageManager.load("user")

);
