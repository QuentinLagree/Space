let login = (request, response) => {
	let User;
	let email = request.body.email
	checkfields = require("./helpFunctions/checkFields")(request.body)

	if (checkfields.error) {
		request.flash("error", "L'email n'est pas saisit", checkfields.field)
		response.redirect("/")
	} else {
		User = require("../../models/User")
		User.findByEmail(email, (user) => {
			if (user["user"] === undefined) {
				request.flash("error", "L'email est invalide", "email")
				response.redirect("/")
			} else {
				User.sendMail(user.email, user.token)
				request.session.mail = user.email
				response.redirect("/login-token")
			}
		})
	}
}

module.exports = login