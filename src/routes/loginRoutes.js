const User = require('../models/accessAuth.js');

module.exports = function(app) {
    app.post('/login', (req, res) => {
        console.log("entra login");
    });
};