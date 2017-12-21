const mysql = require('mysql');
const connect = require('../../db/connection.js');


let userModel = {};
/** metodo para ver usuarios */
userModel.getUsers = (callback) => {
    
    if (connect.Conecta()) {
        connect.Conecta().query(
            'SELECT * FROM vyreym_carefully.usuarios',
            (err, rows) => { 
                if (err) { 
                    console.log(err);
                } else {
                    callback(null, rows);
                }
            }
        )
    }
}

/** metodo para agregar usuarios */
userModel.insertUser = (userData, callback) => {
    if (connect.Conecta()) {
        console.log(userData.names);
        let sql = 'CALL sp_newUser(?,?,?,?)'
        connect.Conecta().query(sql,[userData.names, userData.lastnames, userData.userEmail, userData.pwd],
            (err, result) => {
                if (err) {
                    callback(null, err);
                } else {
                    callback(null, result[0]);
                }
            }
        )
    }
};

/** metodo para actualizar usuario */

userModel.updateUser = (userData, callback) => {
    if (connection) {
        
        const sql = `
            UPDATE users SET
            username = ${connection.escape(userData.username)}
            , passwd = ${connection.escape(userData.passwd)}
            , email = ${connection.escape(userData.email)}
            WHERE id = ${connection.escape(userData.id)}
        `

        connection.query(sql, (err, result) => {
            if (err) {
                throw err;
            } else {
                callback(null, {
                    msg: "success"
                })
            }
        })
    }
};

userModel.deleteUser = (id, callback) => {
    if (connection) {
        let sql = `
            SELECT * FROM users WHERE id = ${connection.escape(id)}
        `;
        connection.query(sql, (err, row) => {
            if (row) {
                let sql = `
                    DELETE FROM users WHERE id = ${connection.escape(id)}
                `;
                connection.query(sql, (err, result) =>{
                    if (err) {
                        throw err;
                    } else {
                        callback(null, {
                            msg: "Usuario eliminado"
                        });
                    }
                });
            } else {
                callback(null, {
                    msg:"no existe el usuario"
                });
            }
        });
    }
};

module.exports = userModel;
