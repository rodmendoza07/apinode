const mysql = require('mysql');
const connect = require('../../db/connection.js');

// connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'testapimysql'
// });

let userModel = {};
/** metodo para ver usuarios */
userModel.getUsers = (callback) => {
    
    if (connect.Conecta()) {
        console.log('entra');
        connect.Conecta().query(
            'SELECT * FROM users ORDER BY id',
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
    if (connection) {
        connection.query(
            'INSERT INTO users SET ?', userData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, {
                        'InsertId': result.insertId
                    })
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
