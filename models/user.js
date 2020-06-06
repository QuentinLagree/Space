let connection = require("../config/database")
let randomstring = require("randomstring");
let mailer = require("../config/mail")

class User {
	constructor(user) {
		this.user = user
	}

	get email () {
		return this.user.email
	}
	get token () {
		return this.user.token
	}

	static create (email, callback) {
		connection.query("INSERT INTO users SET email = ?", [email], (error, result) => {
			if (error) throw error
			callback(result)
		})
	}

	static all (email, callback) {
		connection.query("SELECT * FROM users", [email], (error, users) => {
			if (error) throw error
			callback(users)
		})
	}

	static findByEmail (email, callback) {
		connection.query("SELECT * FROM users WHERE email = ?", [email], (error, users) => {
			if (error) throw error
			callback(new User(users[0]))
		})
	}

	static updateToken (email, callback) {
		connection.query("UPDATE users SET token = ? WHERE email = ?", [randomstring.generate({ length: 60 }), email], (error, user) => {
			if (error) throw error
			callback(user)
		})
	}

	static sendMail (email, token) {
		let mail = {
					from: process.env.MAIL_ADRESS,
					to: email,
					subject: "Space | Connection",
					html: '<h1>Quelqu\'un essaye de ce connecter, c\'est vous ?</h1><br><br><p>Un utilisateur essaye de ce connecter avec votre adresse mail, si cet utilisateur n\'est pas vous, <b>IGNORER ce message. Sinon le token ci-dessous vous permettra de vous connecter à votre compte Space !</b></p><br><br><h3>token : ' + token + '</h3>' 
				}
		mailer.sendMail(mail, (error) => {
			mailer.close()
		})
			}
		}

module.exports = User