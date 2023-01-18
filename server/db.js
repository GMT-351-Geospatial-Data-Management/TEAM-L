const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "alne9699",
    host: "localhost",
    port: 5432,
    database: "gmt351"

})

module.exports = pool;
