import env from "./env.js";        // env stuff
// *******************************Z

import { DataBaseInteraction } from "./testdb";
import Propmt from "prompt-sync";
const db = new DataBaseInteraction({

    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASS,
    port: parseInt(env.DB_PORT),
    connectionLimit: 50,
});

db.AddUser("poggers")

// let prompt = Propmt({ sigint: true })
// while (true) {
//     let name = prompt({ ask: "> " })
//     console.log(name)
//     db.AddUser(name)
// }

