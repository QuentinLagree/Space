let profile = (app) => {
	app.route("/profile/")
		.get((request, response) => {
			response.render("errorPages/NotFound", {url: request.url})
		})
	app.route("/profile/:uuid")
		.get((request, response) => {
			if (request.session.connect === undefined) {
				response.redirect("/login")
			} else {
				require("./functions/FindByUuidFunc")(request, response, "profile")
			}
		})
}

module.exports = profile