let mailer = require("nodemailer");
let smtpTransport = mailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: process.env.MAIL_ADRESS,
		pass: process.env.MAIL_PASSWORD
	}
});

module.exports = smtpTransport