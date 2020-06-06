login = (app) => {
	app.route("/")
		.get((request, response) => {
			response.render("account", {manager: "login"})
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
			response.render("account", {manager: "token", email: request.session.mail})
		})
}


module.exports = login