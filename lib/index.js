"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var env_js_1 = __importDefault(require("./env.js")); // env stuff
// *******************************Z
var testdb_1 = require("./testdb");
var db = new testdb_1.DataBaseInteraction({
    host: env_js_1.default.DB_HOST,
    user: env_js_1.default.DB_USER,
    password: env_js_1.default.DB_PASS,
    port: parseInt(env_js_1.default.DB_PORT),
    connectionLimit: 50,
});
db.AddUser("poggers");
// let prompt = Propmt({ sigint: true })
// while (true) {
//     let name = prompt({ ask: "> " })
//     console.log(name)
//     db.AddUser(name)
// }
