import mariadb from "mariadb";
import { User } from "./types";

export class DataBaseInteraction {
    private conf: mariadb.PoolConfig;

    private pool: mariadb.Pool;

    constructor(config: mariadb.PoolConfig ) {
        this.conf = config;

        this.pool = mariadb.createPool(this.conf)
        console.debug("Connection PoolCluster created.")
    }

    async AddUser(user: User) {
        let conn: mariadb.PoolConnection;
        try {
            let entries = Object.entries(user).map(( pair ): [string, string] => {
                return ['`' + pair[0].replace(/`|\\$|\\`$/g, "") + '`',  pair[1]?.toString?.()]
            })
            // get value names, they will match the database definition
            let sql_value_names = entries.map(( val )=>{ return val[0] })
            // map to questionmarks because I 
            let questionmarks = sql_value_names.map(()=>{ return "?" })
            let sql_values = entries.map(( val )=>{ return val[1] })
            console.log({entries, sql_value_names, questionmarks, sql_values})
            conn = await this.pool.getConnection()
            await conn.query(`INSERT INTO \`testdb\`.\`users\` (${sql_value_names.join(",")}) VALUES (${questionmarks.join(",")});`, [...sql_values])
            conn.release();
        } finally {
            // @ts-expect-error
            conn?.release?.();
        }
    }
}


