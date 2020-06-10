let register = (request, response) => {
	let User = require("../../models/User")
	let email = request.body.email;
	if (email === '' || email === undefined) {
		request.flash("error", "Ce champ n'est pas saisit")
		response.redirect("/register")
	} else {
		User.all(email, (users) => {
			if (users.length === 0) {
				User.create(email, () => {
					request.flash("success", "Votre compte a bien été créer")
					response.redirect("/login")
				})
			}
			for (user of users) {
				if (email === user.email) {
					request.flash("error", "Cette email est déjà pris")
					response.redirect("/register")
				} else {
					User.create(email, () => {
						request.flash("success", "Votre compte a bien été créer")
						response.redirect("/login")
					})
				}
			}
		})
	}
}

module.exports = register