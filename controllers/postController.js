let post = (app) => {
	let message;
	app.route("/post/new")
		.get((request, response) => {
			require("./functions/postGetFunc")(request, response)
		})

		.post((request, response) => {
			message = request.body.message;
			response.redirect("/post/new/loading")
		})

	app.route('/post/new/loading')
		.get((request, response) => {
			require("./functions/postAddFunc")(request, response, message)
		})
}

module.exports = post