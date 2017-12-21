const mysql = require('mysql');

let conn = {};

conn.Conecta = () => {
    var connection = mysql.createConnection({
        host: 'sql.vyreyme.mx',
        user: 'vyreym',
        password: 'kywVM5Pa',
        database: 'vyreym_carefully',
        multipleStatements: true
    });
    return connection;
}

module.exports = conn;
