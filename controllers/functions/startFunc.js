let start = (request, response) => {

	let User = require("../../models/User")
	

	checkfields = require("./helpFunctions/checkFields")(request.body)

	if (checkfields.error) {
		request.session.values = checkfields.values
		request.flash("error", "Un des champs n'est pas saisit", checkfields.field)
		response.redirect("/start")
	} else {
		request.session.values = checkfields.values
		if (request.body.password !== request.body.confirm_password) {
			request.flash("error", "Le mot de passe et le mot de passe de confirmation ne correspondent pas", "confirm_password")
			response.redirect("/start")
		} else {
			User.startUpdate(request.body.name, request.body.firstname, request.body.day, request.body.month, request.body.year, request.body.country, request.body.password, request.session.mail, () => {
				User.findByEmail(request.session.mail, (user) => {
					request.session.user = user
					request.session.starter = true
					response.redirect("/profile/" + user.uuid)
				})
			})
		}
	}
}

module.exports = start