login = (app) => {
	app.route("/")
		.get((request, response) => {
			if (request.session.connect === true) {
				response.redirect("/logout")
			} else {
				request.session.mail = undefined
				response.render("account", {manager: "login"})
			}
		})
		.post((request, response) => {
			require("./functions/loginFunc")(request, response)
		})
		
		
	app.route("/login")
		.get((request, response) => {
			response.redirect("/")
		})

	app.route("/login-token")
		.get((request, response) => {
			if (request.session.mail === undefined) {
				response.redirect("/")
			} else if (request.session.connect === true) {
				response.redirect("/logout")
			} else{
				response.render("account", {manager: "token", email: request.session.mail})
			}
		})

		.post((request,response) => {
			require("./functions/confirmFunc")(request, response)
		})
}


module.exports = login