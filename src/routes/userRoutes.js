const User = require('../models/user');

module.exports = function(app) {
    app.get('/', (req, res) => {
        User.getUsers((err, data) => {
            res.status(200).json(data);
        });
    });

    app.post('/users')
}