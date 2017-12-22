// var mailer = require('express-mailer');

// let ce = {};

// ce.envia = () => {
//     var correo = mailer.extend(app, {
//         from: 'no-reply@carefully.com',
//         host: 'smtp.gmail.com', // hostname 
//         secureConnection: true, // use SSL 
//         port: 465, // port for secure SMTP 
//         transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
//         auth: {
//           user: 'lr.mendozar@gmail.com',
//           pass: 'Rodsh1852'
//         }
//     });
//     return
// }

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
let ce = {}

ce.envia = () => {
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
          user: 'lr.mendozar@gmail.com',
          pass: 'Rodsh1852'
        }
    }));
    return transporter;
};

  module.exports = ce;