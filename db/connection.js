const mysql = require('mysql');

let conn = {};

conn.Conecta = () => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'testapimysql'
    });
    return connection;
}

module.exports = conn;