let findProfile = (request, response, path) => {
	let User;
	let uuid = request.params.uuid

	if (uuid === "" || uuid === undefined) {
		response.redirect("/login")
	} else {
		User = require("../../models/User")
		User.findByUuid(uuid, (user) => {
			if (user["user"] === undefined) {
				response.render("errorPages/NotFound", {url: request.url})
			} else {
				request.session.user = user
				let data = {
					user: request.session.user,
					manager: path
				}
				response.render("account", {data: data})
			}
		})
	}
}

module.exports = findProfile