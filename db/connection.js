const mysql = require('mysql');

let conn = {};

conn.Conecta = () => {
    var connection = mysql.createConnection({
        host: 'sql.vyreyme.mx',
        user: '',
        password: '',
        database: ''
    });
    return connection;
}

module.exports = conn;
