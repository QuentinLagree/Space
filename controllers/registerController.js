let register = (app) => {
	app.route("/register")
		.get((request, response) => {
			if (request.session.connect === true) {
				response.redirect("/logout")
			} else {
			response.render("account", {manager: 'register'})
			}
		})

		.post((request,response) => {
			require("./functions/registerFunc")(request, response)
		})	
}

module.exports = register