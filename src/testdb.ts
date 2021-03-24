import mariadb from "mariadb";

export class DataBaseInteraction {
    private conf: mariadb.PoolConfig;

    private pool: mariadb.Pool;

    constructor(config: mariadb.PoolConfig ) {
        this.conf = config;

        this.pool = mariadb.createPool(this.conf)
        console.debug("Connection pool created.")
    }

    async AddUser(name:string) {
        let conn: mariadb.Pool;
        try {
            let conn = await this.pool.getConnection();
            let res = await conn.query("INSERT INTO `testdb`.`users` (`NAME`) VALUES (?);", [name])
            console.log(`'${name}': #${res.insertId}`)
        } catch (err) {
          throw err;
        } finally {
            // @ts-ignore
            conn?.end();
        }
    }
}


