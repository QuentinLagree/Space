let start = (request, response) => {
	let User = require("../../models/User")
	let name = request.body.name
	let firstname = request.body.firstName
	let password = request.body.password
	let passwordconfirm = request.body.confirm_password
	let born = request.body.born
	let country = request.body.country

	if (name === '' || name === undefined) {
		request.flash("error", "Le nom n'est pas saisit")
		response.redirect("/start")
	} else if (firstname === '' || firstname === undefined) {
		request.flash("error", "Le prénom n'est pas saisit")
		response.redirect("/start")
	} else if (password === '' || password === undefined) {
		request.flash("error", "Le mot de passe n'est pas saisit")
		response.redirect("/start")
	} else if (passwordconfirm === '' || passwordconfirm === undefined) {
		request.flash("error", "Le mot de passe de confirmation n'est pas saisit")
		response.redirect("/start")
	} else if (password !== passwordconfirm) {
		request.flash("error", "Le mot de passe et le mot de passe de confirmation sont incorrect")
		response.redirect("/start")
	} else if (born === '' || born === undefined) {
		request.flash("error", "La date de naissance n'est pas saisit")
		response.redirect("/start")
	} else if (country === '' || country === undefined) {
		request.flash("error", "Le pays n'est pas saisit")
	} else {
		response.redirect("/start?confirm=true")
	}
}

module.exports = start