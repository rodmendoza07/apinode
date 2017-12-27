const User = require('../models/user');

module.exports = function(app) {

    app.get('/users', (req, res) => {
        console.log('body: ' + JSON.stringify(req.body));
        User.getUsers((err, data) => {
            res.status(200).json(data);
        });
    });

    app.post('/newUsers', (req, res) => {
        const userData = {
            names: req.body.names,
            lastnames: req.body.lastnames,
            userEmail: req.body.userEmail,
            pwd: req.body.pwd
        };
        User.insertUser(userData, (err, data) => {
            if (data.errno) {
                console.log(data);
                res.status(500).json({
                    success: false,
                    errno: data.errno,
                });
            } else {
                console.log("antes mail")
                // var mailOptions = {
                //     from: 'lr.mendozar@gmail.com',
                //     to: 'lr.mendozar@icloud.com',
                //     subject: 'Sending Email using Node.js',
                //     text: 'That was easy!'
                // };
                // mail.envia().sendMail(mailOptions, (error, info) => {
                //     if (error) {
                //         console.log(error);
                //       } else {
                //         console.log('Email sent: ' + info.response);
                //       }
                // });
                // mail.envia().send('correo',{
                //     to: 'lr.mendozar@icloud.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.  
                //     subject: 'Test Email', // REQUIRED. 
                //     otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables. 
                //   }, function (err) {
                //     if (err) {
                //       // handle error 
                //       console.log(err);
                //       res.send('There was an error sending the email');
                //       return;
                //     }
                //     console.log("va");
                //     res.send('Email Sent');
                // });
                console.log("despues mailer");
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