function controllers(app) {
	let registerAccount = require("./loginController")
	let loginAccount = require("./registerController")
	let logoutAccount = require("./logoutController")
	let startAccount = require("./startController")

	loginAccount(app)
	registerAccount(app)
	logoutAccount(app)
	startAccount(app)
}



module.exports = controllers