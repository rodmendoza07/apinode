const aA = require('../models/accessAuth');

module.exports = function(app) {
    app.post('/login', (req, res) => {
        console.log("entra login");
        const userData = {
            userName: req.body.userName,
            passwd: req.body.passwd
        };
        aA.createToken(userData,(err, data) => {
            if (data.errno) {
                console.log(data);
                res.status(500).json({
                    success: false,
                    errno: data.errno,
                    errmsg: data.sqlMessage
                });
            } else {
                res.json({
                    success: true,
                    msg: "Datos insertados",
                    data: data
                });
            }
        });
    });
};