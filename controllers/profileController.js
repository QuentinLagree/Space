let profile = (app) => {
	app.route("/profile/")
		.get((request, response) => {
			response.render("errorPages/NotFound", {url: request.url})
		})
	app.route("/profile/:uuid")
		.get((request, response) => {
			require("./functions/profileFindFunc")(request, response)
		})
}

module.exports = profile