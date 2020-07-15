function controllers(app) {
	let registerAccount = require("./loginController")
	let loginAccount = require("./registerController")
	let logoutAccount = require("./logoutController")
	let startAccount = require("./startController")
	let profile = require("./profileController") 
	let errorPageNotFound = require("./errorPageNotFoundController")
	let postAdd = require("./postController")

	loginAccount(app)
	registerAccount(app)
	logoutAccount(app)
	startAccount(app)
	profile(app)
	postAdd(app)
	errorPageNotFound(app)
}



module.exports = controllers