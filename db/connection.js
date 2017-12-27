const mysql = require('mysql');

let conn = {};

conn.Conecta = () => {
    var connection = mysql.createPool({
        host: 'sql.vyreyme.mx',
        user: '',
        password: '',
        database: '',
        multipleStatements: true
    });
    return connection;
}

module.exports = conn;
