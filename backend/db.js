const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'root',
    host:'localhost',
    port:5432,
    database:'taxi_bd'
})

module.exports = pool