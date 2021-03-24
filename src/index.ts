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


let prompt = Propmt({ sigint: true });
(async () => {
    for (let i = 0; i < 5; i++) {
        let name = prompt("> ");
        await db.AddUser(name);
        console.log(`${name} added to db`);
    }
})();

