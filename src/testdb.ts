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
            this.pool.getConnection()
            .then(conn => {
                conn.query("SELECT 1 as val")
                .then(rows => {
                    console.log(rows)
                    conn.query("INSERT INTO `testdb`.`users` (`NAME`) VALUES (?);", [name])
                    .then((res)=>{
                        console.log(`'${name}': #${res.insertId}`)
                    }).catch((err) => {
                        throw err;
                    })
                }).catch((err) => {
                    throw err;
                })
                .finally(()=>{
                    conn.end().catch((err) => {
                        throw err;
                    })
                })
          }).catch((err) => {
              throw err;
          })
        } catch (err) {
          throw err;
        } finally {
            // @ts-ignore
            conn?.end();
        }
    }
}


