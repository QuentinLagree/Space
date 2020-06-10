logout = (app) => {
	app.route("/logout")
		.get((request, response) => {
			if (request.session.connect === false) {
				response.redirect("/login")
			} else {
				response.render("account", {manager: 'logout'})
			}
		})
		.post((request, response) => {
			require("./functions/logoutFunc")(request, response)
		})
}

module.exports = logout