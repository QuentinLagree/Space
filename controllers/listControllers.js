function controllers(app) {
	let registerAccount = require("./loginController")
	let loginAccount = require("./registerController")
	let logoutAccount = require("./logoutController")
	let startAccount = require("./startController")
	let profile = require("./profileController") 
	let errorPageNotFound = require("./errorPageNotFoundController") 

	loginAccount(app)
	registerAccount(app)
	logoutAccount(app)
	startAccount(app)
	profile(app)
	errorPageNotFound(app)
}



module.exports = controllers