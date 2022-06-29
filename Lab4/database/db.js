const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1111",
    database: "toursDB"

});

pool.connect()


module.exports = pool