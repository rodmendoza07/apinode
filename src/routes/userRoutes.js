const User = require('../models/user');

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/users', (req, res) => {
        User.getUsers((err, data) => {
            res.status(200).json(data);
        });
    });

    app.post('/users', (req, res) => {
        const userData = {
            names: req.body.names,
            lastnames: req.body.lastnames,
            userEmail: req.body.userEmail,
            pwd: req.body.pwd
        };
        //console.log("userdata", userData);
        User.insertUser(userData, (err, data) => {
            if (data.errno) {
                res.status(500).json({
                    success: false,
                    errno: data.errno
                });
            } else {
                res.json({
                    success: true,
                    msg: "Datos insertados",
                    data: data
                })
            }                         
        });
    });

    app.put('/users', (req, res) => {
        const userData = {
            id: req.body.id,
            username: req.body.username,
            passwd: req.body.passwd,
            email: req.body.email,
            created_at: null,
            update_at: null
        };
        User.updateUser(userData, (err, data) => {
            if (data && data.msg) {
                res.json(data)
            } else {
                res.json({
                    success: false,
                    msg: "Error"
                })
            }
        })
    });

    app.delete('/users/:id',(req, res) => {
        User.deleteUser(req.params.id, (err, data) => {
            if (data && (data.msg == "Usuario eliminado" || data.msg == "no existe el usuario")) {
                res.json({
                    success: true,
                    msg: data.msg
                })
            } else {
                res.status(500).json({
                    msg: "Error"
                })
            }
        });
    });
}