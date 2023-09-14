const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '10012000?@18',
    database: 'tooth_specialist_db'
})

module.exports = mySqlPool