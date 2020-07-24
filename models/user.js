 let connection = require("../config/database")
let randomstring = require("randomstring");
let mailer = require("../config/mail")
let bcrypt = require("bcrypt")

class User {
	constructor(user) {
		this.user = user
	}

	get id () {
		return this.user.id
	}

	get email () {
		return this.user.email
	}

	get password () {
		return this.user.password
	}

	get token () {
		return this.user.token
	}

	get uuid () {
		return this.user.uuid
	}

	get name () {
		return this.user.name
	}

	get firstname () {
		return this.user.firstname
	}

	get born () {
		return this.user.born.split("/")
	}

	get country () {
		return this.user.country
	}

	get starter () {
		return this.user.starter
	}



	static create (email, callback) {
		connection.query("INSERT INTO users SET email = ?, token = ?, uuid = ?", [email, randomstring.generate({ length: 60 }), randomstring.generate({ length: 100 })], (error, result) => {
			if (error) throw error
			callback(result)
		})
	}

	static all (email, callback) {
		connection.query("SELECT * FROM users", (error, users) => {
			if (error) throw error
			callback(users)
		})
	}

	static startUpdate(name, firstname, day, month, year, country, password, email, callback) {
		let born = day + "/" + month + "/" + year
		bcrypt.hash(password, 10, (error, hash) => {
			connection.query("UPDATE users SET password = ?, name = ?, firstname = ?, born = ?, country = ?, starter = true WHERE email = ?", [hash, name, firstname, born, country, email], (error, result) => {
				if (error) throw error
				callback(result)
			})
		});
	}

	static findByEmail (email, callback) {
		connection.query("SELECT * FROM users WHERE email = ?", [email], (error, users) => {
			if (error) throw error
			callback(new User(users[0]))
		})
	}

	static findByUuid (uuid, callback) {
		connection.query("SELECT * FROM users WHERE uuid = ?", [uuid], (error, users) => {
			if (error) throw error
			callback(new User(users[0]))
		})
	}

	static findByEmailAndToken (token, email, callback) {
		connection.query("SELECT * FROM users WHERE email = ? AND token = ?", [email, token], (error, users) => {
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