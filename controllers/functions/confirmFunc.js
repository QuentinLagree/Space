let confirm = (request, response) => {
	let User = require("../../models/user")
	let token = request.body.token
	if (token === "" || token === undefined) {
		request.flash("error", "Ce champ n'est pas saisit")
		response.redirect("/login-token")
	} else {
		User.findByEmailAndToken(token, request.session.mail, (user) => {
			if (user["user"] === undefined) {
				request.flash("error", "La clé de sécurité est invalide");
				response.redirect("/login-token")
			} else {
				User.updateToken(request.session.mail, () => {
					request.session.user = user
					request.session.connect = true
					response.redirect("/start")
				})
			}
		})
	}
}

module.exports = confirm