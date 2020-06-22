let errorPageNotFound = (app) => {
	app.route("*")
		.get((request, response) => {
			response.render("errorPages/NotFound", {url: request.url})
		})
}

module.exports = errorPageNotFound