import env from "./env.js";        // env stuff
// *********************************

import { DataBaseInteraction } from "./testdb";
import Propmt from "prompt-sync";
const db = new DataBaseInteraction({

    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASS,
    port: parseInt(env.DB_PORT),
    connectionLimit: 50,
});
function rand(max:number) {
    return Math.floor(Math.random() * max)
}

let prompt = Propmt({ sigint: true });
(async () => {
    while (true) {
        let NAME = prompt("> ");
        let TWITCH_ID = rand(999999999);
        await db.AddUser({ NAME, TWITCH_ID });
        console.log(`${NAME} added to db with twitch id ${TWITCH_ID}`);
    }
})();

