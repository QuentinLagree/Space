function controllers(app) {
	let registerAccount = require("./loginController")
	let loginAccount = require("./registerController")

	loginAccount(app)
	registerAccount(app)
}



module.exports = controllers