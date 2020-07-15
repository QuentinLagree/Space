logout = (app) => {
	app.route("/logout")
		.get((request, response) => {
			if (request.session.connect === undefined) {
				response.redirect("/login")
			} else {
				let data = {
					manager: 'logout'
				}
				response.render("account", {data: data})
			}
		})
		.post((request, response) => {
			require("./functions/logoutFunc")(request, response)
		})
}

module.exports = logout