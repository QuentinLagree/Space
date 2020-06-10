let login = (request, response) => {
	let User = require("../../models/User")
	let email = request.body.email
	if (email === '' || email === undefined) {
		request.flash("error", "Ce champ n'est pas saisit")
		response.redirect("/")
	} else {
		User.findByEmail(email, (user) => {
			if (user["user"] === undefined) {
				request.flash("error", "L'email est invalide")
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