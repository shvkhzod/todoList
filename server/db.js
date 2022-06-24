const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "Luckysteve237,",
    host: "localhost",
    port: "5432",
    database: "todos"
});

//some notes

module.exports = pool;