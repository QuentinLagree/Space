let register = (request, response) => {
	let User;
	let email = request.body.email;
	if (email === undefined || email === '') {
		request.flash("error", "L'email n'est pas saisit")
		response.redirect("/register")
	} else {
		User = require("../../models/User")
		/*
			1 On verifie si l'email entré est déjà utilisé
			2 Si l'email est déjà utilisé Alors on envoie un message d'erreur
			3 On crée le nouvel utilisateur
		*/

		User.findByEmail(email, (user) => {
			if (user["user"] === undefined) {
				User.create(email, () => {
					response.redirect("/login")
				})
			} else {
				request.flash("error", "L'email est déjà utilisé")
				response.redirect("/register")
			}
		})
		
	}
}

module.exports = register