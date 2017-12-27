const mysql = require('mysql');
const connect = require('../../db/connection.js');

let aAmodel = {};

aAmodel.createToken = (userData, callback) => {
    if (connect.Conecta()) {
        console.log(userData);
        let sql = 'CALL sp_hashToken(?,?)';
        connect.Conecta().query(sql,[userData.userName, userData.passwd],
            (err, result) => {
                if (err) {
                    callback(null, err);
                } else {
                    callback(null, result[0]);
                }
            }
        )
    }
}

module.exports = aAmodel;