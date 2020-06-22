let register = (app) => {
	app.route("/register")
		.get((request, response) => {
			if (request.session.connect === true) {
				response.redirect("/logout")
			} else {
			let data = {
				manager: 'register'
			}
			response.render("account", {data: data})
			}
		})

		.post((request,response) => {
			require("./functions/registerFunc")(request, response)
		})	
}

module.exports = register