let register = (app) => {
	app.route("/register")
		.get((request, response) => {
			response.render("account", {manager: 'register'})
		})

		.post((request,response) => {
			require("./functions/registerFunc")(request, response)
		})	
}

module.exports = register